const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url == "/") {
    response.write("welcome");
    return response.end();
  }

  if (request.url == "/about") {
    response.write("acerca de");
    return response.end();
  }

  response.write(`
    <h1>Not found</h1>
    <p>Pag no encontrada</p>
    <a href="/">volver al home</a>
    `);
  response.end();
});

server.listen(3000);

console.log("Servidor en el puerto 3000");
