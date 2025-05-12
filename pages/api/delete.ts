import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../utils/database";
import { MongoClient, ObjectId } from "mongodb";
import { SessionContext } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse, props: { params: { id: string } }) {

    const session = await getServerSession(req, res, authOptions);
    console.log(session);
    console.log(req.body);

    const userEmail = session?.user?.email; // 세션에서 이메일 가져오기

    if (req.method !== 'DELETE') {
        return res.status(405).end(); // 405 Method Not Allowed
    } else if (userEmail !== req.body.email) {
        return res.status(403).json({ error: '권한 없음' }); // 403 Forbidden
    } else {
        try {
            console.log(req.body);
            const client = (await connectDB) as MongoClient;
            const db = client.db("forum");
    
            await db.collection("post").deleteOne(
                { _id: new ObjectId(req.body._id) }
            )
    
            const posts = await db.collection("post").find().toArray();
            console.log(posts);
    
            return res.status(200).end();
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: '서버 오류' });
        }
    }

    
}