import { Request, Response } from "express";
import CreateClientService from "../services/clients/createClient.Service";

import deleteClientService from "../services/clients/deleteClientService";
import listClientsService from "../services/clients/listClient.Service";
import listOneClientService from "../services/clients/listOneClient.service";
import updateClientService from "../services/clients/updateClientService";

export const createClientController = async (req: Request, res: Response) => {
  const { name, email, telephone, created_at } = req.body;
  const newClient = await CreateClientService({
    name,
    email,
    telephone,
    created_at,
  });
  return res.status(201).json(newClient);
};

export const listClientController = async (req: Request, res: Response) => {
  const client = await listClientsService();
  return res.json(client);
};

export const updateClientController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, telephone } = req.body;

  const client = await updateClientService({ id, name, email, telephone });

  return res.status(200).json(client);
};

export const deleteClientController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const client = await deleteClientService(id);
  return res.status(200).json({ message: "client deleted with sucess!" });
};

export const listOneClientController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const client = await listOneClientService(id);
  return res.status(200).json(client);
};
