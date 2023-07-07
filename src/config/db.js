import mysql from "mysql2"
import dotenv from 'dotenv'

dotenv.config()

console.log(process.env.USER_DB)
const options =
{
    // host: process.env.HOST_DB,
    // user: process.env.USER_DB,
    // database: process.env.DATABASE_DB
    host: 'localhost',
    user: 'root',
    database: 'vincentavez',
    password: 'root'
}
export const connection = mysql.createConnection(options).promise();