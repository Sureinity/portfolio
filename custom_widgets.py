from textual.widgets import Footer, Header, Static, Input, Button, Log, Label, ProgressBar
from textual.events import Click

class Link(Static):
    DEFAULT_CSS = """
    Link {
        color: dodgerblue;
        text-style: underline;
    }

    Link:hover {
        color: orange;
    }
    """
    def __init__(self, text: str, target: str, id: str): # 'target' is for screen switching reference
        super().__init__(text, id=id)
        self.target = target

    def on_click(self, events: Click):
        self.app.switch_screen(self.target)
