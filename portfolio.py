from textual.app import App
from textual.widgets import ProgressBar

from screens import LoadingScreen, MenuScreen, AboutMeScreen

class Portfolio(App):
    def compose(self):
        yield ProgressBar(id="loading-bar", total=100, show_eta=False)

    def on_mount(self):
        self.install_screen(LoadingScreen(), name="splash")
        self.install_screen(MenuScreen(), name="menu")
        self.install_screen(AboutMeScreen(), name="about-me")

        self.push_screen("splash")

app = Portfolio()
app.run()
