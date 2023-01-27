import { Request, Response } from "express";
import CreateContactService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import listContactService from "../services/contacts/listContact.service";
import listOneContactService from "../services/contacts/listOneContact.service";
import updateContactService from "../services/contacts/updateContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const { name, email, telephone } = req.body;
  const { id } = req.params;
  const newContact = await CreateContactService({ name, email, telephone, id });
  return res.status(201).json(newContact);
};

export const listContactController = async (req: Request, res: Response) => {
  const contact = await listContactService();
  return res.json(contact);
};

export const updateContactController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, telephone } = req.body;

  const contact = await updateContactService({ id, name, email, telephone });

  return res.status(200).json(contact);
};

export const deleteContactController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const contact = await deleteContactService(id);
  return res.status(200).json({ message: "contact deleted with sucess!" });
};

export const listOneContactController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const contact = await listOneContactService(id);
  return res.status(200).json(contact);
};
