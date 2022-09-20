import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";

const deleteClientService = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({ id: id });

  if (!client) {
    throw new Error("User not found");
  }
  const deleteClient = await clientRepository.delete(client.id);
  return deleteClient;
};

export default deleteClientService;
