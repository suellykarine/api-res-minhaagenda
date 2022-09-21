import express from "express";
import "reflect-metadata";
import { errorMiddleware } from "./middlewares/error.middleware";
import { appRoutes } from "./routes/index";

const app = express();

app.use(express.json());
appRoutes(app);

app.use(errorMiddleware);
app.listen(process.env.PORT || 3000);

export default app;
