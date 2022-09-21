import { AppDataSource } from "../../data-source";

import { Contact } from "../../entities/contacts.entity";

const listOneContactService = async (id: string) => {
  const contactOneRepository = AppDataSource.getRepository(Contact);

  const contact = await contactOneRepository.findOneBy({ id });

  return contact;
};

export default listOneContactService;
