import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb+srv://wd036:4fxYrhgUqMIIGI2g@cluster0.0lntyla.mongodb.net/test"

const mongoClient = new MongoClient(url);

let pool;


try {
    pool = await mongoClient.connect();
    console.log("Connected to Mongo DB")
} catch (e) {
    console.error(e.message)
}

export { pool as default, ObjectId };