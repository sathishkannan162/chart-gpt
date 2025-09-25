from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from src.core.llm_chat_db import generate_sql_query, execute_query

app = FastAPI(title="LLM Chat DB API", description="API for LLM chat with database")

class ChatRequest(BaseModel):
    message: str

class ExecuteRequest(BaseModel):
    sql_query: str
    execute: bool = False

@app.get("/")
async def root():
    return {"message": "Welcome to LLM Chat DB API"}

@app.post("/generate-sql")
async def generate_sql_endpoint(request: ChatRequest):
    """
    Generate SQL query from natural language message.
    """
    try:
        sql_query = generate_sql_query(request.message)
        return {"generated_sql": sql_query}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/chat")
async def chat_endpoint(request: ExecuteRequest):
    """
    Full chat endpoint: generate SQL and optionally execute it.
    """
    try:
        # Generate SQL
        sql_query = generate_sql_query(request.message)
        
        if request.execute:
            # Execute the query
            result = execute_query(sql_query)
            return {
                "generated_sql": sql_query,
                "executed": True,
                "result": result
            }
        else:
            # Just return the generated SQL for confirmation
            return {
                "generated_sql": sql_query,
                "executed": False,
                "message": "SQL generated. Use execute=true to run it."
            }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/execute-sql")
async def execute_sql_endpoint(request: ExecuteRequest):
    """
    Execute a provided SQL query.
    """
    try:
        if not request.sql_query:
            raise HTTPException(status_code=400, detail="SQL query is required")
        
        result = execute_query(request.sql_query)
        return {
            "executed_sql": request.sql_query,
            "result": result
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)