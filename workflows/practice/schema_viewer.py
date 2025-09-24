import sqlite3

db_path = "data/demo.db"
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Query sqlite_master for all schema definitions
cursor.execute("""
    SELECT type, name, sql
    FROM sqlite_master
    WHERE type IN ('table', 'index', 'view', 'trigger')
    ORDER BY type, name;
""")

for obj_type, name, sql in cursor.fetchall():
    print(f"-- {obj_type.upper()} {name}")
    print(sql, "\n")

conn.close()