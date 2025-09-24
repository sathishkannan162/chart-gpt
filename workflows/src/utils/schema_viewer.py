import sqlite3
import json

def get_schema(db_path):
    """
    Retrieve schema information from SQLite database and return as JSON string.
    
    Args:
        db_path (str): Path to the SQLite database file.
    
    Returns:
        str: JSON string containing schema objects.
    """
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Query sqlite_master for all schema definitions
    cursor.execute("""
        SELECT type, name, sql
        FROM sqlite_master
        WHERE type IN ('table', 'index', 'view', 'trigger')
        ORDER BY type, name;
    """)
    
    results = []
    for obj_type, name, sql in cursor.fetchall():
        results.append({
            'object_type': obj_type,
            'name': name,
            'sql': sql
        })
    
    conn.close()
    
    return json.dumps(results, indent=2)
