import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  listClientController,
  listOneClientController,
  updateClientController,
} from "../controllers/client.controllers";

const clientRouter = Router();

clientRouter.post("", createClientController);
clientRouter.get("", listClientController);
clientRouter.get("/:id", listOneClientController);
clientRouter.patch("/:id", updateClientController);
clientRouter.delete("/:id", deleteClientController);

export default clientRouter;
