import sqlite3

def create_db():
    conn = sqlite3.connect("quiz.db")
    cursor = conn.cursor()

    # Create table
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

    # Insert sample questions
    sample_questions = [
        ("What is the output of 2**3 in Python?", "5", "6", "8", "9", "8"),
        ("Which keyword is used to create a function in Python?", "def", "fun", "function", "define", "def"),
        ("What is the file extension for Python files?", ".py", ".java", ".cpp", ".js", ".py"),
        ("Which data type is immutable in Python?", "List", "Set", "Dictionary", "Tuple", "Tuple"),
    ]

    cursor.executemany("""
    INSERT INTO questions (question, option1, option2, option3, option4, answer)
    VALUES (?, ?, ?, ?, ?, ?)
    """, sample_questions)

    conn.commit()
    conn.close()
    print("✅ Database setup complete with sample questions.")

if __name__ == "__main__":
    create_db()
