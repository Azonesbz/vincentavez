import mysql from "mysql2"
import dotenv from 'dotenv'

dotenv.config()

const options =
{
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    database: process.env.DATABASE_DB,
    password: process.env.password,
    port: 3306,
}
export const connection = mysql.createConnection(options).promise();