import pool, { ObjectId } from "../db/mongo.js";
import ErrorResponse from "../utils/ErrorResponse.js";

const DATABASE = "lectureDB";
const COLLECTION = "users";
const userCollection = pool.db(DATABASE).collection(COLLECTION);

const findAll = async () => await userCollection.find().toArray()

const findByName = async (name) => {
    const query = {
        $or: [
            { first_name: new RegExp(name, "i") },
            { firstName: new RegExp(name, "i") },
            { name: new RegExp(name, "i") }
        ]
    }

    let users = await userCollection.find(query).toArray();
    if (users.length === 0)
        throw new ErrorResponse("Non existing name on DB", 404);

    return users;
}

const findById = async (id) => {

    const query = { _id: new ObjectId(id) };
    return await userCollection.findOne(query);


}

const createUser = async (firstName, lastName, age) => {
    const user = {
        first_name: firstName,
        last_name: lastName,
        age: age
    }
    const { insertedId } = await userCollection.insertOne(user);

    return await userCollection.findOne({ _id: insertedId });
}

export { findAll, findByName, createUser, findById }