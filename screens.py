from textual.containers import Container, Horizontal, Vertical
from textual.widgets import Static, Input, Button, Log, ProgressBar, TabbedContent, TabPane, Markdown
from textual.screen import Screen
from pathlib import Path

from custom_widgets import Link 
 
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
        """
    def compose(self):
        with TabbedContent(initial="about-me"):
            with TabPane("About Me", id="about-me"):
                yield Markdown(load_md("about-me"))
            with TabPane("Skills", id="skills"):
                yield Markdown(load_md("skills"))
            with TabPane("Projects", id="project"):
                 yield Markdown(load_md("projects"))
            with TabPane("Contact", id="contact"):
                 yield Markdown(load_md("contact"))
