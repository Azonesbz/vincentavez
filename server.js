import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

console.log(process.env.user_db)
console.log(process.env.user_db)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json({msg: "hello"})
})

app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`)
})