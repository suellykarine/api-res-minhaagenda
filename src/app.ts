import cors from "cors";
import express from "express";
import "reflect-metadata";
import { errorMiddleware } from "./middlewares/error.middleware";
import { appRoutes } from "./routes/index";

const app = express();

app.use(express.json());
app.use(cors());
appRoutes(app);

app.use(errorMiddleware);

export default app;
