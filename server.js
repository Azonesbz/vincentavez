import express from 'express'
import dotenv from 'dotenv'
import router from './src/router.js'
import cors from 'cors'
import https from "https"
import fs from "fs"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

const options = {
    key: fs.readFileSync('https_cert/privkey.pem'),
    cert: fs.readFileSync('https_cert/cert.pem'),
  };

app.use(express.static('public'));
app.use(express.json({ limit: "100mb" }));
app.use(cors())
app.use(router)

https.createServer(options, app).listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`)
})