import express from 'express'
import dotenv from 'dotenv'
import router from './src/router.js'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'));
app.use(cors())
app.use(router)

app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`)
})