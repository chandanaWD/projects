import tkinter as tk
from tkinter import messagebox
from database import init_db, get_all_questions


class QuizApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Quiz Application")
        self.root.geometry("600x400")

        # Initialize DB (creates table & inserts sample questions if needed)
        init_db()

        # Load all questions
        self.questions = get_all_questions()
        self.current_q_index = 0
        self.score = 0

        # Question Label
        self.question_label = tk.Label(root, text="", font=("Arial", 16), wraplength=500, justify="left")
        self.question_label.pack(pady=20)

        # Options (Radio buttons)
        self.var = tk.StringVar()
        self.options = []
        for i in range(4):
            rb = tk.Radiobutton(root, text="", variable=self.var, value="", font=("Arial", 14))
            rb.pack(anchor="w")
            self.options.append(rb)

        # Next Button
        self.next_button = tk.Button(root, text="Next", command=self.next_question, font=("Arial", 14), bg="lightblue")
        self.next_button.pack(pady=20)

        self.load_question()

    def load_question(self):
        if self.current_q_index < len(self.questions):
            q = self.questions[self.current_q_index]
            self.question_label.config(text=q[1])  # question text
            self.var.set("")  # reset selection
            for i in range(4):
                self.options[i].config(text=q[i + 2], value=q[i + 2])
        else:
            self.show_result()

    def next_question(self):
        if self.var.get() == "":
            messagebox.showwarning("Warning", "Please select an answer!")
            return

        correct_answer = self.questions[self.current_q_index][6]
        if self.var.get() == correct_answer:
            self.score += 1

        self.current_q_index += 1
        self.load_question()

    def show_result(self):
        messagebox.showinfo("Result", f"Your score is {self.score}/{len(self.questions)}")
        self.root.quit()


if __name__ == "__main__":
    root = tk.Tk()
    app = QuizApp(root)
    root.mainloop()
