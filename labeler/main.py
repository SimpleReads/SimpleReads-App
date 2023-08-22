import tkinter as tk
from controller import SentenceController

if __name__ == '__main__':
    root = tk.Tk()
    root.geometry("1280x800")
    controller = SentenceController(root)
    root.mainloop()
