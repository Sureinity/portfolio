from textual.app import App
from textual.widgets import Footer, Header, Static, Input, Button, Log

class Portfolio(App):
    def compose(self):
        self.input = Input(placeholder="Enter message...")
        self.message = Log()
        yield Button("Send")
        yield self.input
        yield self.message

    def on_button_pressed(self, event):
        text = self.input.value
        self.message.write(f'{text}\n')
        self.input.value = ""

app = Portfolio()
app.run()
