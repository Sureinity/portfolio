from textual.app import App
from textual.widgets import ProgressBar

from screens import MenuScreen, MessageScreen

class Portfolio(App):
    def compose(self):
        yield ProgressBar(id="loading-bar", total=100, show_eta=False)

    def on_mount(self):
        self.progress = self.query_one("#loading-bar", ProgressBar)
        self.progress_value = 0

        self.install_screen(MenuScreen(), name="menu")
        self.install_screen(MessageScreen(), name="message")

        self.timer = self.set_interval(0.1, self.update_progress)

    def update_progress(self):
        self.progress_value += 2
        self.progress.advance(self.progress_value)
        if self.progress_value >= 50:
            self.push_screen("menu")
            self.timer.stop()


app = Portfolio()
app.run()
