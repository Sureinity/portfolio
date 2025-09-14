from textual.app import App
from textual.screen import Screen
from textual.widgets import Footer, Header, Static, Input, Button, Log, Label, LoadingIndicator

class HomeScreen(Screen):
    def compose(self):
        yield Label("GHLEN'S PORTFOLIO")
        yield Button("Try message", id="goto-message")

    def on_button_pressed(self, event):
        self.app.switch_screen("message")

class MessageScreen(Screen):
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
    def on_mount(self):
        self.install_screen(HomeScreen(), name="home")
        self.install_screen(MessageScreen(), name="message")

        self.push_screen(HomeScreen())

app = Portfolio()
app.run()
