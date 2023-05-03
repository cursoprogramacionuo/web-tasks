const express = require("express")

let app = express();
let port = 8081;

app.set("views","views")
app.set("view engine","ejs")

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

const routerTasks = require("./routers/routerTasks")
app.use("/tasks",routerTasks)

app.listen(port, () => {
    console.log("Servidor activo")
})