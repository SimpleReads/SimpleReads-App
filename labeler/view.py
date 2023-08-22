import tkinter as tk
from tkinter import Menu, filedialog

class SentenceView:
    def __init__(self, root, controller):
        self.root = root
        
        # Labels
        self.original_label = tk.Label(root, text="Original Sentence:")
        self.original_label.place(relx=0.1, rely=0.1, anchor=tk.W)

        self.lexical_label = tk.Label(root, text="Lexical Simplifications:")
        self.lexical_label.place(relx=0.1, rely=0.4, anchor=tk.W)

        self.syntactic_label = tk.Label(root, text="Syntactic Simplification:")
        self.syntactic_label.place(relx=0.1, rely=0.7, anchor=tk.W)
        
        # Text Widgets for Sentences
        self.original_sentence = tk.Text(root, height=3, wrap=tk.WORD, width=120)
        self.original_sentence.place(relx=0.1, rely=0.2, anchor=tk.W)

        self.lexical_sentence = tk.Text(root, height=3, wrap=tk.WORD, width=120)
        self.lexical_sentence.place(relx=0.1, rely=0.5, anchor=tk.W)

        self.syntactic_sentence = tk.Text(root, height=3, wrap=tk.WORD, width=120)
        self.syntactic_sentence.place(relx=0.1, rely=0.8, anchor=tk.W)

        # Bind right-click event to text widgets
        self.original_sentence.bind("<Button-3>", controller.on_right_click)
        self.lexical_sentence.bind("<Button-3>", controller.on_right_click)
        self.syntactic_sentence.bind("<Button-3>", controller.on_right_click)

        # Menu
        self.menu = Menu(root)
        self.root.config(menu=self.menu)
        self.file_menu = Menu(self.menu)
        self.menu.add_cascade(label="File", menu=self.file_menu)

    def update_sentence(self, original, lexical, syntactic):
        # Update original_sentence
        self.view.original_sentence.delete("1.0", tk.END)
        self.view.original_sentence.insert(tk.END, original)

        # Update lexical_sentence
        self.view.lexical_sentence.delete("1.0", tk.END)
        self.view.lexical_sentence.insert(tk.END, lexical)

        # Update syntactic_sentence
        self.view.syntactic_sentence.delete("1.0", tk.END)
        self.view.syntactic_sentence.insert(tk.END, syntactic)

