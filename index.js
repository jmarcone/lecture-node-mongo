import Express from "express";
import userRouter from "./controllers/user.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = Express();

app.use(Express.json());



app.use("/api/user", userRouter);



app.use(errorHandler);

app.listen(4030, () => console.log("server running on 4030"))