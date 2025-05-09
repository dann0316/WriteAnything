import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../util/database";
import { MongoClient, ObjectId } from "mongodb";

export default async function handler (req : NextApiRequest,res : NextApiResponse, props: { params: { id: string } }) {
    if(req.method === 'GET') {
        const client = (await connectDB) as MongoClient;
        const db = client.db("forum");
        const posts = await db.collection("post").find().toArray();
        
        console.log(posts);
        return res.status(200).json(posts);
    }
} 