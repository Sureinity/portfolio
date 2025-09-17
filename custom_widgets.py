from textual.widgets import Static
from textual.events import Click, Key
from textual.reactive import reactive

class Link(Static):
    DEFAULT_CSS = """
    Link {
        color: dodgerblue;
        text-style: underline;
    }

    Link:hover, Link:focus {
        color: orange;
    }
    """

    can_focus = True
    has_focus: reactive[bool] = reactive(False)

    def __init__(self, text: str, target: str, id: str = None):
        super().__init__(text, id=id)
        self.target = target

    def on_focus(self):
        self.has_focus = True

    def on_blur(self):
        self.has_focus = False

    def on_click(self, event: Click):
        self.app.switch_screen(self.target)

    def on_key(self, event: Key):
        if event.key == "enter":
            self.app.switch_screen(self.target)

