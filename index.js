import express from "express"

// Creando App
const app = express()
const port = 3000

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto 3000")
})

// Routing
app.get("/", (req, res) => {
    res.send("Hola Mundo desde NodeJS")
})