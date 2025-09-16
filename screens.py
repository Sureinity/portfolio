from textual.containers import Container, Horizontal, Vertical
from textual.widgets import Static, Input, Button, Log, ProgressBar
from textual.screen import Screen

from custom_widgets import Link 
 
LOGO = """
██╗  ██╗███████╗██╗     ██╗      ██████╗ 
██║  ██║██╔════╝██║     ██║     ██╔═══██╗
███████║█████╗  ██║     ██║     ██║   ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ 
    """

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
        border: green;
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
    #about-me {
        margin-top: 2;
    }
    """
    def compose(self):
        yield Container(
            Vertical(
                Static(LOGO, id="logo"),
                Link("About Me", "message", id="about-me"),
                id="center-stack"
            )
        )
       


class MessageScreen(Screen):
    CSS = """
    Log {
        border: heavy green;  /* border style + color */
        padding: 1;           /* optional inner spacing */
        height: 10;           /* optional fixed height */
    }
    """

    def compose(self):
        yield Input(placeholder="Enter message...", id="message-input")
        yield Log(id="log-container")
        yield Button("Send", id="button-send")
        yield Button("Go Back to Menu", id="go-back")

    def on_button_pressed(self, event):
        if event.button.id == "button-send":
            input = self.query_one("#message-input", Input)
            log = self.query_one("#log-container", Log)
            log.write(f"{input.value}\n")
        if event.button.id == "go-back":
            self.app.switch_screen(MenuScreen())


