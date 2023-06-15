import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json({msg: "hello"})
})

app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`)
})