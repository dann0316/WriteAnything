import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../util/database";
import { MongoClient } from "mongodb";
import { get } from "http";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const session = await getServerSession(req, res, authOptions);
    console.log(session);
    console.log(req.body);

    if (req.method !== 'POST') {
        return res.status(405).end(); // 405 Method Not Allowed
    }
    

    try {
        const client = (await connectDB) as MongoClient;
        const db = client.db("forum");
        req.body.email = session?.user?.email; // 세션에서 이메일 가져오기
        console.log(req.body);
        await db.collection("post").insertOne({
            title: req.body.title,
            content: req.body.content,
            email: req.body.email,
            date: new Date(),
        });

        const posts = await db.collection("post").find().toArray();
        console.log(posts);

        return res.status(200).redirect('/list');
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: '서버 오류' });
    }
}
