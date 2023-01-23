import express from "express"
import routes from "./routes/usuarioRoutes.js"

// Creando App
const app = express()
const port = 3000

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto 3000")
})

// Habilitando Pug
app.set('view engine', 'pug')
app.set('views', './views')

// Routing
app.use("/auth", routes)