import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";

const listOneClientService = async (id: string) => {
  const clientOneRepository = AppDataSource.getRepository(Client);

  const client = await clientOneRepository.findOneBy({ id });

  return client;
};

export default listOneClientService;
