import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";

const listClientsService = async () => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.find();

  return client;
};

export default listClientsService;
