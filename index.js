const net = require("net");

const server = net.createServer((socket) => {
    console.log("Jogador conectado");

    socket.on("data", (data) => {
        console.log("Recebido:", data.toString());
    });
});

server.listen(8080, "0.0.0.0", () => {
    console.log("Servidor rodando");
});
