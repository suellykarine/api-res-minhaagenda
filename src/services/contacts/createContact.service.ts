import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appError";
import { IContact } from "../../interfaces";

const CreateContactService = async ({
  name,
  email,
  telephone,
  id,
}: IContact) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const clientOneRepository = AppDataSource.getRepository(Client);

  const client = await clientOneRepository.findOneBy({ id });
  if (!client) {
    throw new AppError(404, "client not found");
  }

  const newContact = contactRepository.create({
    name,
    email,
    telephone,
    client: client,
  });
  await contactRepository.save(newContact);
  return newContact;
};

export default CreateContactService;
