import {actuality} from "../repository/actuality_repository.js"

export async function getActualityPost(req, res){
    const post = await actuality.get()
    res.json({post})
}