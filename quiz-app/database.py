import sqlite3

DB_NAME = "quiz.db"

def init_db():
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    
    # Create table if it does not exist
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT NOT NULL,
            option1 TEXT NOT NULL,
            option2 TEXT NOT NULL,
            option3 TEXT NOT NULL,
            option4 TEXT NOT NULL,
            answer TEXT NOT NULL
        )
    """)
    
    # Check if table is empty, then insert sample data
    cursor.execute("SELECT COUNT(*) FROM questions")
    if cursor.fetchone()[0] == 0:
        sample_data = [
            ("What is the capital of India?", "Mumbai", "Delhi", "Kolkata", "Chennai", "Delhi"),
            ("Which language is used for web apps?", "Python", "Java", "PHP", "All of the above", "All of the above"),
            ("Who is the father of Computer?", "Newton", "Charles Babbage", "Einstein", "Alan Turing", "Charles Babbage")
        ]
        cursor.executemany(
            "INSERT INTO questions (question, option1, option2, option3, option4, answer) VALUES (?, ?, ?, ?, ?, ?)",
            sample_data
        )
        print("✅ Sample questions inserted into database.")
    
    conn.commit()
    conn.close()

def get_all_questions():
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM questions")
    rows = cursor.fetchall()
    conn.close()
    return rows
