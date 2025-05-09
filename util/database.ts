import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://디비아이디와비밀번호@cluster0.q3rburu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


let connectDB: Promise<MongoClient>;

declare global {
    var _mongo: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
        global._mongo = new MongoClient(url).connect();
    }
    connectDB = global._mongo;
} else {
    connectDB = new MongoClient(url).connect();
}

export { connectDB };
