import { AppDataSource } from "../../data-source";

import { Contact } from "../../entities/contacts.entity";

const deleteContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({ id: id });

  if (!contact) {
    throw new Error("User not found");
  }
  const deleteContact = await contactRepository.delete(contact.id);
  return deleteContact;
};

export default deleteContactService;
