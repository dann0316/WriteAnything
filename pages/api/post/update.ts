import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../utils/database";
import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse, props: { params: { id: string } }) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // 405 Method Not Allowed
    }

    try {
        console.log(req.body);
        const client = (await connectDB) as MongoClient;
        const db = client.db("forum");

        await db.collection("post").updateOne(
            { _id: new ObjectId(req.body._id) },
            { $set: { title: req.body.title, content: req.body.content } }
        )

        const posts = await db.collection("post").find().toArray();
        console.log(posts);

        return res.status(200).redirect('/list');
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: '서버 오류' });
    }
}