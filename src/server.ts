import express from "express";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();
import Routers from "./router";
import ErrorMiddleware from "./middleware/error.middleware";
import NotFoundMiddleware from "./middleware/404.middleware";

const registerRoute = new Routers();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(registerRoute.router);
app.use(ErrorMiddleware);
app.use(NotFoundMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
