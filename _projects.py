from dataclasses import dataclass

@dataclass
class ProjectInfo:
    """A dataclass to hold information about your projects."""
    title: str
    description: str
    tech_stack: str
    url: str

MY_PROJECTS: list[ProjectInfo] = [
    ProjectInfo(
        title="MaxiDOM",
        description="A Chrome extension that uses behavioral biometrics such as mouse movements and typing patterns to detect unauthorized access to a browser profile.",
        tech_stack="Chrome Extension, FastAPI, Scikit-learn",
        url="https://github.com/Sureinity/maxidom",
    ),
    ProjectInfo(
        title="Maxicom-BIMS",
        description="A book inventory management system for UM Digos City - LIC, designed to streamline and simplify library book tracking.",
        tech_stack="Django w/ REST Framework, QuaggaJS, PostgreSQL, Bootstrap",
        url="https://github.com/Sureinity/maxicom-bims",
    ),
    ProjectInfo(
        title="dir-syncer",
        description="A powerful Bash script that configures network devices, performs health checks, and generates reports.",
        tech_stack="Python",
        url="https://github.com/Sureinity/dir-syncer",
    ),
    ProjectInfo(
        title="Readkami",
        description="A mobile application for viewing journals and articles.",
        tech_stack="Java",
        url="https://github.com/Sureinity/readkami",
    ),
]
