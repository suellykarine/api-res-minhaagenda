"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contacts_controllers_1 = require("../controllers/contacts.controllers");
const contactRouter = (0, express_1.Router)();
contactRouter.post("/:client_id", contacts_controllers_1.createContactController);
contactRouter.get("/", contacts_controllers_1.listContactController);
contactRouter.get("/:client_id", contacts_controllers_1.listContactController);
contactRouter.patch("/:id_contact", contacts_controllers_1.updateContactController);
contactRouter.delete("/:id_contact", contacts_controllers_1.deleteContactController);
exports.default = contactRouter;
