import express from "express"
import usuarioRoutes from './routes/usuarioRoutes.js'

const app = express()

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