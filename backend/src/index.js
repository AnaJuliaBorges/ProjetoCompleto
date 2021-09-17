const express = require("express");
const server = express();
server.use(express.json()); //dizer para a API que estamos recebendo e devolcendo informações .json

const TaskRoutes = require("./routes/TaskRoutes");
server.use("/task", TaskRoutes); //Toda vez que usamos server.use estamos injetando arquivos na API

server.listen(3000, () => {
	console.log("API ONLINE");
});
