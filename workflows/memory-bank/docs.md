# Documentation: Tools and Libraries Used in Chat Completion Implementation

## Overview
This document outlines the key libraries and tools integrated into the simple chat completion system implemented in `practice/chat-db.py`. The system leverages LangChain for conversational AI with persistent memory stored in a SQLite database.

## Libraries Used

### 1. LangChain (Core Framework)
- **Purpose**: Provides the orchestration layer for building conversational chains, managing memory, and integrating with LLMs.
- **Key Components**:
  - `ConversationChain`: Handles the conversation flow.
  - `ConversationBufferMemory`: Manages chat history in memory.
  - `ChatPromptTemplate`: Defines the prompt structure for the LLM.
- **Installation**: `pip install langchain`
- **Documentation**: [LangChain Docs](https://python.langchain.com/docs/)

### 2. langchain-openai
- **Purpose**: Integration with OpenAI's API for LLM calls via LangChain.
- **Key Components**:
  - `ChatOpenAI`: Wrapper for OpenAI's chat models (e.g., GPT-3.5-turbo).
- **Installation**: `pip install langchain-openai`
- **Requirements**: Set `OPENAI_API_KEY` environment variable.
- **Documentation**: [LangChain OpenAI Integration](https://python.langchain.com/docs/integrations/llms/openai/)

### 3. langchain-community
- **Purpose**: Community-contributed extensions, including database integrations.
- **Key Components**:
  - `SQLChatMessageHistory`: Persistent storage of chat history in SQLite.
- **Installation**: `pip install langchain-community`
- **Documentation**: [LangChain Community](https://python.langchain.com/docs/integrations/)

### 4. SQLite3 (Built-in Python Library)
- **Purpose**: Lightweight database for storing chat history persistently.
- **Key Usage**: Database file `chat_history.db` auto-created by `SQLChatMessageHistory`.
- **No Installation Needed**: Part of Python standard library.
- **Documentation**: [SQLite3 Docs](https://docs.python.org/3/library/sqlite3.html)

## Setup Instructions
1. Install dependencies:
   ```
   pip install langchain langchain-openai langchain-community
   ```
2. Set environment variable:
   - Windows: `set OPENAI_API_KEY=your_api_key`
   - Linux/Mac: `export OPENAI_API_KEY=your_api_key`
3. Run the script: `python practice/chat-db.py`

## Usage
- The script initializes a conversation chain with loaded history.
- User inputs are processed through the chain, responses generated via OpenAI, and history saved to DB.
- Type 'quit' to exit; history persists across sessions.

## Potential Extensions
- Add more advanced memory types (e.g., `ConversationSummaryMemory` for long histories).
- Integrate with other LLMs or vector stores for RAG.
- Enhance prompt engineering for domain-specific chats (e.g., SQL querying based on project context).

Last Updated: 2025-09-24