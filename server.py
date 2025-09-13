import os
from textual_serve.server import Server

port = int(os.environ.get("PORT", 8000))
host = "0.0.0.0"

server = Server("python portfolio.py", port=port, host=host)
server.serve()
