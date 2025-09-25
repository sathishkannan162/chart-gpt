import sqlite3
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_community.utilities import SQLDatabase
from langchain.chains import create_sql_query_chain
from langchain.schema import StrOutputParser
from ..utils.schema_viewer import get_schema  # Import the function from existing script

# Load environment variables from .env file
load_dotenv()

# Set OpenAI API key from environment
api_key = os.getenv('OPENAI_API_KEY')
if not api_key:
    raise ValueError("OPENAI_API_KEY not found in environment. Please set it in a .env file.")

DB_PATH = "data/demo.db"

def initialize_llm_and_db():
    """
    Initialize LLM and Database connection.
    Returns LLM and DB instances.
    """
    llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0, openai_api_key=api_key)
    db = SQLDatabase.from_uri(f"sqlite:///{DB_PATH}")
    return llm, db

def create_query_chain(llm, db):
    """
    Create a LangChain SQL query chain with schema context.
    """
    # Get schema for better context
    schema = get_schema(DB_PATH)
    prompt = f"""
    Based on the following database schema: {schema}
    
    Generate SQL queries for the user's question. Only generate SELECT queries for questions asking for information.
    For other operations, generate appropriate SQL but do not execute DML/DDL without explicit confirmation.
    
    Question: {{question}}
    SQL Query:
    """
    
    chain = create_sql_query_chain(llm, db, prompt=prompt)
    return chain

def generate_sql_query(user_prompt):
    """
    Generate SQL query from user prompt using LLM.
    Returns the generated SQL query.
    """
    llm, db = initialize_llm_and_db()
    chain = create_query_chain(llm, db)
    sql_query = chain.invoke({"question": user_prompt})
    return sql_query

def execute_query(sql_query):
    """
    Execute SQL query using LangChain's SQLDatabase and return results.
    """
    try:
        llm, db = initialize_llm_and_db()
        if sql_query.lower().strip().startswith('select'):
            results = db.run(sql_query)
            return results
        else:
            db.run(sql_query)
            return "Query executed successfully."
    except Exception as e:
        return f"Database error: {e}"

def chat_with_db():
    """
    Main chat loop for interacting with the DB via LLM using LangChain.
    """
    print("LLM Chat with Database using LangChain. Type 'exit' to quit.")
    
    while True:
        user_prompt = input("\nYou: ").strip()
        if user_prompt.lower() in ['exit', 'quit']:
            break
        
        if not user_prompt:
            continue
        
        # Get SQL from LangChain
        sql_query = generate_sql_query(user_prompt)
        print(f"Generated SQL: {sql_query}")
        
        # Confirm before executing
        confirm = input("Execute this query? (y/n): ").strip().lower()
        if confirm == 'y':
            result = execute_query(sql_query)
            print(f"Results: {result}")
        else:
            print("Query not executed.")

if __name__ == "__main__":
    chat_with_db()