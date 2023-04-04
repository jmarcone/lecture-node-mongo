import { Router } from "express";
import { findAll, findByName, createUser, findById } from "../models/user.js";

const userRouter = Router();


userRouter
    .route("/")
    .get(async (req, res) => {
        let users = await findAll()

        res.json(users);
    })

    .post(asyncHandler(async (req, res, next) => {
        const { body: { firstName, lastName, age } } = req;

        let user = await createUser(firstName, lastName, age);

        res.json(user);
    }));


userRouter
    .get("/find-by-id/:id", async (req, res) => {
        const { params: { id } } = req;
        let user = await findById(id);

        res.json(user);
    })

userRouter
    .get("/find-by-name/:name", (req, res, next) => {
        const { params: { name } } = req;

        findByName(name)
            .then(user => res.json(user))
            .catch(next);

    })



export default userRouter;