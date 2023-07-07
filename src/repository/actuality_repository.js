import { connection } from "../config/db.js";

async function getPost(){
    const [post] = await connection.query('SELECT title, content, date, pictures FROM actuality')
    return post
}

export const actuality = {
    get: getPost
}