from textual.widgets import Static, Label
from textual.containers import Vertical, VerticalScroll, Horizontal, ItemGrid, Grid
from textual.events import Click, Key
from textual.reactive import reactive

from _projects import MY_PROJECTS, ProjectInfo

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

class ProjectCard(Vertical):
    CSS = """
    ProjectCard {
        border: green;
    }

    ProjectCard:hover, ProjectCard:focus {
        color: orange;
    }
        """

    can_focus = True
    has_focus: reactive[bool] = reactive(False)

    def __init__(self, project_info: ProjectInfo):
        self.project = project_info
        super().__init__()

    def on_focus(self):
        self.has_focus = True

    def on_blur(self):
        self.has_focus = False

    def compose(self):
        info = self.project
        yield Label(info.title)
        yield Static(info.description)
        yield Static(info.url)
