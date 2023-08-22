import tkinter as tk
from tkinter import Menu, filedialog
from tkinter import ttk
from tkinter import font as tkfont

class SentenceView:
    def __init__(self, root, controller):
        self.root = root
        
        # Font settings
        bold_font = tkfont.Font(family="Helvetica", size=12, weight="bold")
        
        # Labels
        self.original_label = tk.Label(
            root, 
            text="Original Sentence:", 
            bg="light blue", 
            font=bold_font
            )
        self.original_label.place(relx=0.1, rely=0.1, anchor=tk.W)

        self.lexical_label = tk.Label(
            root, 
            text="Lexical Simplifications:", 
            bg="light blue", 
            font=bold_font
            )
        self.lexical_label.place(relx=0.1, rely=0.4, anchor=tk.W)

        self.syntactic_label = tk.Label(
            root, 
            text="Syntactic Simplification:", 
            bg="light blue", 
            font=bold_font
            )
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

        # Current Sentence
        line_num_label = tk.Label(
            root, 
            text="Current Sentence:",
            bg="light blue", 
            font=bold_font
            )
        line_num_label.place(relx=0.0, rely=0.0, anchor=tk.NW)

        self.sentence_number = tk.Label(
            root, 
            text="1",
            bg="light blue", 
            font=bold_font
            )
        self.sentence_number.place(relx=0.125, rely=0.0, anchor=tk.NW)

        # Switching Sentence
        self.switch_sentence_label = tk.Label(
            root, 
            text="Switch Sentence:",
            bg="light blue", 
            font=bold_font
            )
        self.switch_sentence_label.place(relx=0.0, rely=0.03, anchor=tk.NW)

        # Text widget for sentence number
        self.switch_sentence_text = tk.Text(
            root, 
            height=1, 
            width=3)
        self.switch_sentence_text.place(relx=0.125, rely=0.03, anchor=tk.NW)
