import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { IContact } from "../../interfaces";

const CreateContactService = async ({ name, email, telephone }: IContact) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const newContact = contactRepository.create({
    name,
    email,
    telephone,
  });
  await contactRepository.save(newContact);
  return newContact;
};

export default CreateContactService;
