from textual.screen import Screen
from textual.widgets import Markdown
from textual.containers import Container

MARKDOWN = """
    ### **Final Step: Test 3 (Confirmation)**

The final step is a formality to confirm our findings in a live test.

**Your Action Item:**

1.  **Train the Final Model**:
    *   Wipe the `user_data/` directory completely.
    *   Place your `normal.csv` file into `user_data/<your_profile_id>/`, renaming it to `features.csv`.
    *   Start the backend. It should automatically detect that the diversity criteria are met and trigger the initial training. You will see a log message confirming the model has been trained and saved.

2.  **Live Test (Attacker)**:
    *   Have your "attacker" friend use your browser again for a few minutes.
    *   **Provide the Logs**: Report back the anomaly scores they generate from the `/score` endpoint.

**Expected Outcome**: Based on the massive statistical differences in the data, I predict with very high confidence that the live test will produce **strong, consistently negative anomaly scores** for the attacker. This will be the final piece of evidence for your project's success.

    """
class MD(Screen):
    CSS = """
    Screen {
        align: center middle;
    }
    Container#one {
        layout: horizontal;
        border: solid green;
        padding: 1 2;
    }
        Container#two {
        layout: horizontal;
        border: solid red;
        padding: 1 2;
    }
    """
    def compose(self):
        self.one = Markdown(MARKDOWN)
        self.two = Markdown(MARKDOWN)
        yield Container(
            self.one,
            id="one"
        )
        yield Container(
            self.two,
            id="two"
        )

    def on_mount(self):
        self.one.border_title = "Markdown 1"
        self.two.border_title = "Markdown 2"
        self.one.styles.border_title_align = "center"
        self.two.styles.border_title_align = "center"



