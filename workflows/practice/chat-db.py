import os
from langchain_openai import ChatOpenAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory
from langchain_community.chat_message_histories import SQLChatMessageHistory
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from dotenv import load_dotenv

# Set up OpenAI client via LangChain (user needs OPENAI_API_KEY env var)
load_dotenv()
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# Database setup for chat history using LangChain's SQLChatMessageHistory
DB_PATH = "sample.db"
history = SQLChatMessageHistory(session_id="default", connection_string=f"sqlite:///{DB_PATH}")

def init_db():
    # LangChain's SQLChatMessageHistory auto-creates the table, but ensure connection
    history.add_user_message("System initialized.")

def main():
    init_db()
    
    # Load history into memory
    memory = ConversationBufferMemory(
        chat_memory=history,
        return_messages=True,
        memory_key="sample"
    )
    
    # Prompt template for conversation
    prompt = ChatPromptTemplate.from_messages([
        ("system", "You are a helpful assistant."),
        MessagesPlaceholder(variable_name="chat_history"),
        ("human", "{input}")
    ])
    
    # Create conversation chain
    conversation = ConversationChain(
        llm=llm,
        memory=memory,
        prompt=prompt,
        verbose=True  # Optional: for debugging
    )
    
    print("Simple LangChain Chat Completion with DB Memory. Type 'quit' to exit.")
    print("Note: Install dependencies: pip install langchain langchain-openai langchain-community")
    print("Set OPENAI_API_KEY environment variable before running.")
    
    while True:
        user_input = input("You: ").strip()
        if user_input.lower() == 'quit':
            break
        
        try:
            response = conversation.invoke({"input": user_input})
            print(f"Assistant: {response['response']}")
        except Exception as e:
            print(f"Error: {e}")
    
    print("Chat ended. History saved to DB.")

if __name__ == "__main__":
    main()
