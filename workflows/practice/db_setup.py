import sqlite3

def create_db():
    conn = sqlite3.connect('data/demo.db')
    c = conn.cursor()
    
    # Users table
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  name TEXT NOT NULL,
                  email TEXT UNIQUE NOT NULL,
                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)''')
    
    # Posts table
    c.execute('''CREATE TABLE IF NOT EXISTS posts
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  title TEXT NOT NULL,
                  content TEXT NOT NULL,
                  user_id INTEGER NOT NULL,
                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                  FOREIGN KEY (user_id) REFERENCES users (id))''')
    
    # Comments table
    c.execute('''CREATE TABLE IF NOT EXISTS comments
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  content TEXT NOT NULL,
                  user_id INTEGER NOT NULL,
                  post_id INTEGER NOT NULL,
                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                  FOREIGN KEY (user_id) REFERENCES users (id),
                  FOREIGN KEY (post_id) REFERENCES posts (id))''')
    
    # Tags table
    c.execute('''CREATE TABLE IF NOT EXISTS tags
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  name TEXT UNIQUE NOT NULL)''')
    
    # Post_tags junction
    c.execute('''CREATE TABLE IF NOT EXISTS post_tags
                 (post_id INTEGER NOT NULL,
                  tag_id INTEGER NOT NULL,
                  PRIMARY KEY (post_id, tag_id),
                  FOREIGN KEY (post_id) REFERENCES posts (id),
                  FOREIGN KEY (tag_id) REFERENCES tags (id))''')
    
    # Insert sample data
    # Users
    c.execute("INSERT OR IGNORE INTO users (name, email) VALUES ('John Doe', 'john@example.com')")
    c.execute("INSERT OR IGNORE INTO users (name, email) VALUES ('Jane Smith', 'jane@example.com')")
    
    # Posts
    c.execute("INSERT OR IGNORE INTO posts (title, content, user_id) VALUES ('First Post', 'This is the first post.', 1)")
    c.execute("INSERT OR IGNORE INTO posts (title, content, user_id) VALUES ('Second Post', 'This is another post.', 2)")
    
    # Comments
    c.execute("INSERT OR IGNORE INTO comments (content, user_id, post_id) VALUES ('Great post!', 2, 1)")
    c.execute("INSERT OR IGNORE INTO comments (content, user_id, post_id) VALUES ('I agree.', 1, 1)")
    
    # Tags
    c.execute("INSERT OR IGNORE INTO tags (name) VALUES ('Python')")
    c.execute("INSERT OR IGNORE INTO tags (name) VALUES ('SQL')")
    
    # Post_tags
    c.execute("INSERT OR IGNORE INTO post_tags (post_id, tag_id) VALUES (1, 1)")
    c.execute("INSERT OR IGNORE INTO post_tags (post_id, tag_id) VALUES (2, 2)")
    
    # Additional users
    c.execute("INSERT OR IGNORE INTO users (name, email) VALUES ('Alice Johnson', 'alice@example.com')")
    c.execute("INSERT OR IGNORE INTO users (name, email) VALUES ('Bob Wilson', 'bob@example.com')")
    
    # Additional posts
    c.execute("INSERT OR IGNORE INTO posts (title, content, user_id) VALUES ('Third Post', 'Another post by John.', 1)")
    c.execute("INSERT OR IGNORE INTO posts (title, content, user_id) VALUES ('Fourth Post', 'Alice''s first post.', 3)")
    
    # Additional comments
    c.execute("INSERT OR IGNORE INTO comments (content, user_id, post_id) VALUES ('Nice one Jane.', 1, 2)")
    c.execute("INSERT OR IGNORE INTO comments (content, user_id, post_id) VALUES ('Interesting.', 2, 3)")
    c.execute("INSERT OR IGNORE INTO comments (content, user_id, post_id) VALUES ('Welcome Alice!', 4, 4)")
    
    # Additional tags
    c.execute("INSERT OR IGNORE INTO tags (name) VALUES ('Database')")
    c.execute("INSERT OR IGNORE INTO tags (name) VALUES ('Web')")
    
    # Additional post_tags
    c.execute("INSERT OR IGNORE INTO post_tags (post_id, tag_id) VALUES (3, 3)")
    c.execute("INSERT OR IGNORE INTO post_tags (post_id, tag_id) VALUES (4, 4)")
    c.execute("INSERT OR IGNORE INTO post_tags (post_id, tag_id) VALUES (1, 2)")
    conn.commit()
    conn.close()
    print("Database 'demo.db' created with complex schema and sample data.")

if __name__ == "__main__":
    create_db()