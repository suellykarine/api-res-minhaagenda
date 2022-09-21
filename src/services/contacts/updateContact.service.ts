import { AppDataSource } from "../../data-source";

import { Contact } from "../../entities/contacts.entity";
import { IUpdateContact } from "../../interfaces";

const updateContactService = async ({
  id,
  name,
  email,
  telephone,
}: IUpdateContact) => {
  const contactUpdateRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactUpdateRepository.findOneBy({ id: id });
  if (!contacts) {
    throw new Error("User not found");
  }
  await contactUpdateRepository.update(contacts!.id, {
    name: name,
    email: email,
    telephone,
  });

  const newContact = await contactUpdateRepository.findOneBy({ id: id });

  return newContact;
};

export default updateContactService;
