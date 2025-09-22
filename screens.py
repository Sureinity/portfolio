from textual.containers import Container, Horizontal, Vertical, ItemGrid
from textual.widgets import Static, Input, Button, Log, ProgressBar, TabbedContent, TabPane, Markdown, Footer, Header
from textual.screen import Screen
from pathlib import Path

from custom_widgets import Link, ProjectCard

from _projects import MY_PROJECTS

 
LOGO = """
██╗  ██╗███████╗██╗     ██╗      ██████╗ 
██║  ██║██╔════╝██║     ██║     ██╔═══██╗
███████║█████╗  ██║     ██║     ██║   ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ 
    """

def load_md(filename: str):
    content_path = Path(__file__).parent / "md" / f"{filename}.md"
    try:
        return content_path.read_text()
    except FileNotFoundError:
        return f"# Error\n\nCould not find `{content_path}`."

class LoadingScreen(Screen):
    def compose(self):
        yield ProgressBar(id="loading-bar", total=100, show_eta=False)

    def on_mount(self):
        self.progress_value = 0
        self.timer = self.set_interval(0.1, self.update_progress)

    def update_progress(self):
        self.progress_value += 10
        progress_bar = self.query_one("#loading-bar", ProgressBar)
        progress_bar.advance(self.progress_value)
        if progress_bar.progress >= 100:
            self.app.push_screen("menu")
            self.timer.stop()

class MenuScreen(Screen):
    CSS = """
    Screen {
        align: center middle;
    }
    Container {
        width: auto;
        height: auto;
        align: center middle;
    }
    #center-stack {
        align: center middle;
    }
    #logo {
        align: center middle;
    }
    Link {
        margin-top: 2;
    }
    """
    def compose(self):
        yield Container(
            Vertical(
                Static(LOGO, id="logo"),
                Link("About Me", "about-me", id="about-me"),
                id="center-stack"
            )
        )
       
class AboutMeScreen(Screen):
    CSS = """
    ProjectCard {
        border: round green;
        padding: 1 2;
        margin: 1;
        background: $panel;
    }

    ProjectCard Label {
        text-style: bold;
        color: $text;
    }

    ProjectCard:hover, ProjectCard:focus {
        background: $boost;
        color: orange;
        border: round orange;
    }
    """
    BINDINGS = [
        ("q", "switch_tab('previous')", "Previous"),
        ("e", "switch_tab('next')", "Next"),
    ]
    def compose(self):
        yield Footer()
        with TabbedContent(initial="about-me", id="main-tab"):
            with TabPane("About Me", id="about-me"):
                yield Markdown(load_md("about-me"))
            with TabPane("Skills", id="skills"):
                yield Markdown(load_md("skills"))
            with TabPane("Projects", id="project"):
                with ItemGrid(min_column_width=40):
                    for project in MY_PROJECTS:
                        yield ProjectCard(project)
            with TabPane("Contact", id="contact"):
                 yield Markdown(load_md("contact"))
        yield Static(id="test")

    def action_switch_tab(self, direction: str):
        tab = self.query_one("#main-tab", TabbedContent)
        tabs = [pane.id for pane in self.query(TabPane)]

        counter = tabs.index(tab.active)
        max_counter = len(tabs)

        if direction == "next":
            counter = (counter + 1) % max_counter
        elif direction == "previous":
            counter = (counter - 1) % max_counter

        tab.active = tabs[counter]
