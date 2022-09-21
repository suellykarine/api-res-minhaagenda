import { Express } from "express";
import clientRouter from "./client.routes";
import contactRouter from "./contact.routes";

export const appRoutes = (app: Express) => {
  app.use("/client", clientRouter);
  app.use("/contact", contactRouter);
};

export default appRoutes;
