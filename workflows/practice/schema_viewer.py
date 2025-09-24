import sqlite3

def show_schema(db_path='data/demo.db'):
    conn = sqlite3.connect(db_path)
    c = conn.cursor()
    
    markdown_lines = []
    markdown_lines.append("# Database Schema")
    
    # Get list of tables
    c.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = c.fetchall()
    
    if not tables:
        markdown_lines.append("No tables found in the database.")
        conn.close()
        return "\n".join(markdown_lines)
    
    markdown_lines.append("## Tables")
    markdown_lines.append(f"Found {len(tables)} table(s): {', '.join(t[0] for t in tables)}")
    markdown_lines.append("")
    
    for table in tables:
        table_name = table[0]
        
        # Get column info
        c.execute(f"PRAGMA table_info({table_name});")
        columns = c.fetchall()
        
        markdown_lines.append(f"### Table: {table_name}")
        markdown_lines.append("")
        markdown_lines.append("| id | name | type | notnull | default | pk |")
        markdown_lines.append("|----|------|------|---------|---------|----|")
        for col in columns:
            col_id, col_name, col_type, col_notnull, col_default, col_pk = col
            notnull_mark = "Yes" if col_notnull else "No"
            default_val = col_default if col_default is not None else ""
            pk_mark = "Yes" if col_pk else "No"
            markdown_lines.append(f"| {col_id} | {col_name} | {col_type} | {notnull_mark} | {default_val} | {pk_mark} |")
        markdown_lines.append("")
    
    conn.close()
    return "\n".join(markdown_lines)

if __name__ == "__main__":
    schema_md = show_schema()
    print(schema_md)