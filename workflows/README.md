# LLM Chat DB API

FastAPI application providing a natural language interface to query and interact with a SQLite database using OpenAI's LLM via LangChain.

## Features

- Generate SQL queries from natural language questions
- Execute SQL queries safely
- Interactive chat interface for database exploration
- Proper project structure with core, utils, and database modules
- Development tools for linting, formatting, and testing

## Project Structure

```
.
├── app.py                 # Main FastAPI application
├── src/
│   ├── core/              # Core business logic
│   │   └── llm-chat-db.py # LLM-powered SQL generation and execution
│   ├── utils/             # Utility functions
│   │   └── schema_viewer.py # Database schema extraction
│   └── database/          # Database setup and configuration
│       └── db_setup.py    # Database initialization scripts
├── data/                  # Database files
│   └── demo.db            # Sample SQLite database
├── prompts/               # Documentation and setup guides
├── pyproject.toml         # Project configuration and dependencies
└── README.md              # This file
```

## Prerequisites

- Python 3.13+
- uv package manager (recommended)
- OpenAI API key

## Setup

1. **Clone/Navigate to project directory**
   ```bash
   cd workflows
   ```

2. **Install dependencies**
   ```bash
   uv sync
   # or for development
   uv sync --group dev
   ```

3. **Create environment file**
   Create a `.env` file in the root directory:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Verify database**
   Ensure `data/demo.db` exists with your schema. Run `src/database/db_setup.py` if needed.

## Development Commands

All commands are available via uv scripts in `pyproject.toml`:

```bash
# Start development server with auto-reload
uv run dev

# Start production server
uv run start

# Lint code with ruff
uv run lint

# Format code with black
uv run format

# Run tests with pytest
uv run test
```

### Manual Commands

- **Development Server**: `uvicorn app:app --reload --host 0.0.0.0 --port 8000`
- **Production Server**: `uvicorn app:app --host 0.0.0.0 --port 8000`
- **Interactive API Docs**: Visit `http://localhost:8000/docs` (Swagger UI)
- **API Schema**: Visit `http://localhost:8000/redoc`

## API Endpoints

### 1. Health Check
- **GET** `/`
- Returns welcome message and API status

### 2. Generate SQL
- **POST** `/generate-sql`
- **Request Body**: `{"message": "natural language question"}`
- **Response**: `{"generated_sql": "SELECT ..."}`
- Generates SQL query from natural language input

### 3. Chat (Generate + Optional Execute)
- **POST** `/chat`
- **Request Body**: 
  ```json
  {
    "message": "What are the top products?",
    "execute": false
  }
  ```
- **Response** (when `execute=false`): 
  ```json
  {
    "generated_sql": "SELECT ...",
    "executed": false,
    "message": "SQL generated. Use execute=true to run it."
  }
  ```
- **Response** (when `execute=true`): 
  ```json
  {
    "generated_sql": "SELECT ...",
    "executed": true,
    "result": "query results"
  }
  ```

### 4. Execute SQL
- **POST** `/execute-sql`
- **Request Body**: `{"sql_query": "SELECT * FROM products"}`
- **Response**: 
  ```json
  {
    "executed_sql": "SELECT ...",
    "result": "query results"
  }
  ```

## Example Usage

### Using curl

1. **Generate SQL**:
   ```bash
   curl -X POST "http://localhost:8000/generate-sql" \
        -H "Content-Type: application/json" \
        -d '{"message": "Show me the top 5 products by sales"}'
   ```

2. **Chat with execution**:
   ```bash
   curl -X POST "http://localhost:8000/chat" \
        -H "Content-Type: application/json" \
        -d '{"message": "List all customers", "execute": true}'
   ```

### Using Python requests

```python
import requests

# Generate SQL
response = requests.post(
    "http://localhost:8000/generate-sql",
    json={"message": "What is the total revenue?"}
)
print(response.json())

# Execute chat
response = requests.post(
    "http://localhost:8000/chat",
    json={"message": "Show recent orders", "execute": true}
)
print(response.json())
```

## Database Schema

The application uses `data/demo.db` SQLite database. The schema viewer utility extracts table structures for LLM context.

To view schema:
```python
from src.utils.schema_viewer import get_schema
print(get_schema("data/demo.db"))
```

## Development Workflow

1. **Start dev server**: `uv run dev`
2. **Open API docs**: `http://localhost:8000/docs`
3. **Test endpoints** using the interactive Swagger UI
4. **Format code**: `uv run format`
5. **Lint**: `uv run lint`
6. **Add tests**: Create files in `tests/` directory and run `uv run test`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for LLM | ✅ Yes |

## Troubleshooting

- **Module not found**: Run `uv sync` to install dependencies
- **Database not found**: Ensure `data/demo.db` exists
- **API key error**: Check `.env` file has `OPENAI_API_KEY`
- **Port already in use**: Change port in `pyproject.toml` scripts or kill existing process

## Testing

Create tests in a `tests/` directory. Example structure:

```
tests/
├── test_api.py          # API endpoint tests
├── test_llm_chat.py     # LLM chat functionality tests
└── conftest.py          # Test fixtures
```

Run tests: `uv run test`

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

This project is licensed under the MIT License.