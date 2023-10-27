import express from "express"
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from "./config/db.js"

const app = express()

// Habilitando lectura de valores de un formulario
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Conectando a la base de datos
try {
    await db.authenticate()
    db.sync() // Crea las tablas en la base de datos en caso de no existir
    console.log('Conexión correcta a la base de datos')
} catch( error ){ 
    console.log(error)
}

// Routing
app.use('/auth', usuarioRoutes)

// Habilitando Pug
app.set('view engine', 'pug')
app.set('views', './views')

// Habilitando carpeta public
app.use(express.static('public'))

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`)
})