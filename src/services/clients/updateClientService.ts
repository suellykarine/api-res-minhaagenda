import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { IUpdateClient } from "../../interfaces";

const updateClientService = async ({
  id,
  name,
  email,
  telephone,
}: IUpdateClient) => {
  const clientUpdateRepository = AppDataSource.getRepository(Client);

  const clients = await clientUpdateRepository.findOneBy({ id: id });
  if (!clients) {
    throw new Error("User not found");
  }
  await clientUpdateRepository.update(clients!.id, {
    name: name,
    email: email,
    telephone,
  });

  const newClient = await clientUpdateRepository.findOneBy({ id: id });

  return newClient;
};

export default updateClientService;
