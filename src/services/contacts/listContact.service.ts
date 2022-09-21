import { AppDataSource } from "../../data-source";

import { Contact } from "../../entities/contacts.entity";

const listContactService = async () => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.find();

  return contact;
};

export default listContactService;
