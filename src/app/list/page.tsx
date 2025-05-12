import { MongoClient, ObjectId } from "mongodb";
import { connectDB } from "../../../utils/database.ts";
import ListItem from "./ListItem.tsx";


export default async function List() {

    const client = (await connectDB) as MongoClient;
    const db = client.db("forum");
    const posts = await db.collection("post").find().toArray() as { _id: ObjectId; title: string; email:string; content: string }[];
    const plainPosts = posts.map(post => ({
        ...post,
        _id: post._id.toString()
    }));

    return (
        <div className="gap-10 flex flex-col items-center justify-center pt-45">
            <h4 className="text-3xl font-bold">Text List</h4>
            <ListItem posts = {plainPosts}/>
        </div>
    );
}