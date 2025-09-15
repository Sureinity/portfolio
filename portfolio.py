from textual.app import App
from textual.screen import Screen
from textual.widgets import Footer, Header, Static, Input, Button, Log, Label, ProgressBar

from markdown import MD

class HomeScreen(Screen):

    CSS = """
    """
    def compose(self):
        yield Label("GHLEN'S PORTFOLIO")
        yield Button("Try message", id="goto-message")
        yield Button("Try Markdown", id="goto-markdown")


    def on_button_pressed(self, event):
        if event.button.id == "goto-markdown":
             self.app.switch_screen("markdown")
        if event.button.id == "goto-message":
            self.app.switch_screen("message")

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
        yield Button("Go Back to Home", id="go-back")

    def on_button_pressed(self, event):
        if event.button.id == "button-send":
            input = self.query_one("#message-input", Input)
            log = self.query_one("#log-container", Log)
            log.write(f"{input.value}\n")
        if event.button.id == "go-back":
            self.app.switch_screen(HomeScreen())

class Portfolio(App):
    def compose(self):
        yield ProgressBar(id="loading-bar", total=100, show_eta=False)

    def on_mount(self):
        self.progress = self.query_one("#loading-bar", ProgressBar)
        self.progress_value = 0

        self.install_screen(HomeScreen(), name="home")
        self.install_screen(MessageScreen(), name="message")
        self.install_screen(MD(), name="markdown")

        self.timer = self.set_interval(0.1, self.update_progress)

    def update_progress(self):
        self.progress_value += 2
        self.progress.advance(self.progress_value)
        if self.progress_value >= 50:
            self.push_screen("home")
            self.timer.stop()


app = Portfolio()
app.run()
