import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contacts.controllers";

const contactRouter = Router();

contactRouter.post("/:client_id", createContactController);
contactRouter.get("/", listContactController);
contactRouter.get("/:client_id", listContactController);
contactRouter.patch("/:id_contact", updateContactController);
contactRouter.delete("/:id_contact", deleteContactController);

export default contactRouter;
