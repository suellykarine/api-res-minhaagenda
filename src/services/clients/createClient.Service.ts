import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { ICreateClient } from "../../interfaces";

const CreateClientService = async ({
  name,
  email,
  telephone,
  created_at,
}: ICreateClient) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const newClient = clientRepository.create({
    name,
    email,
    telephone,
    created_at,
  });
  await clientRepository.save(newClient);
  return newClient;
};

export default CreateClientService;
