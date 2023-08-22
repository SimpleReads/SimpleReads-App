from model import SentenceModel
from view import SentenceView
import tkinter as tk
from tkinter import Menu

class SentenceController:
    def __init__(self, root):
        self.model = SentenceModel()
        self.view = SentenceView(root, self)
        
        self.view.file_menu.add_command(label="Load Files", command=self.load_csv)
        
        # Move the creation of the "Next" button here.
        self.next_button = tk.Button(root, text="Next", command=self.next_sentence)
        self.next_button.place(relx=0.5, rely=0.9, anchor=tk.CENTER)

        self.model.load_default()
        self.update_sentence()

    def next_sentence(self):
        self.model.next_sentence()
        self.update_sentence()

    def load_csv(self):
        self.model.load_csv()
        
    def update_sentence(self):
        original, lexical, syntactic = self.model.update_sentence()

        # Update original_sentence
        self.view.original_sentence.delete("1.0", tk.END)
        self.view.original_sentence.insert(tk.END, original)

        # Update lexical_sentence
        self.view.lexical_sentence.delete("1.0", tk.END)
        self.view.lexical_sentence.insert(tk.END, lexical)

        # Update syntactic_sentence
        self.view.syntactic_sentence.delete("1.0", tk.END)
        self.view.syntactic_sentence.insert(tk.END, syntactic)

    def on_right_click(self, event):
        widget = event.widget  # This will give you the widget that triggered the event
        index = widget.index(f"@{event.x},{event.y} wordstart")
        last_index = widget.index(f"@{event.x},{event.y} wordend")
        clicked_word = widget.get(index, last_index)

        synonyms = self.model.get_synonyms(clicked_word)  # Assuming get_synonyms is defined in your model

        # Create a popup menu
        popup = Menu(self.view.root, tearoff=0)
        
        if synonyms:
            for synonym in synonyms:
                popup.add_command(label=synonym, command=lambda s=synonym: self.replace_word(widget, index, last_index, s))
        else:
            popup.add_command(label="No synonyms found")

        # Position menu at the event location
        popup.tk_popup(event.x_root, event.y_root)

    def replace_word(self, widget, start_index, end_index, new_word):
        widget.delete(start_index, end_index)
        widget.insert(start_index, new_word)
