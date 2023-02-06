import express from "express"
import db from "./config/db.js"
import routes from "./routes/usuarioRoutes.js"

// Creando App
const app = express()
const port = 3000

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto 3000")
})

// Habilitar lectura de datos de formularios
app.use(express.urlencoded({extended: true}))

// Conexion a la base de datos
try {
    await db.authenticate()
    db.sync()
    console.log("Conexion correcta a la base de datos")
} catch (error) {
    console.log(error)
}

// Habilitando Pug
app.set('view engine', 'pug')
app.set('views', './views')

// Carpeta publica
app.use(express.static('public'))

// Routing
app.use("/auth", routes)