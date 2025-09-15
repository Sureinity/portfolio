from textual.containers import Horizontal
from textual.widgets import Static, Input, Button, Log
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

class MenuScreen(Screen):
    def compose(self):
        yield Static(LOGO)
        yield Horizontal(
            Link("About Me", "message")
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


