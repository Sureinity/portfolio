import os
from textual_serve.server import Server

port = int(os.environ.get("PORT", 10000))
host = "0.0.0.0"

server = Server(
    command="python portfolio.py", 
    port=port,
    host=host,
    public_url="https://portfolio-pzey.onrender.com"
)
server.serve()
