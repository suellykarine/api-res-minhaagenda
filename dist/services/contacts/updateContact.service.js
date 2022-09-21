"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const contacts_entity_1 = require("../../entities/contacts.entity");
const updateContactService = ({ id, name, email, telephone, }) => __awaiter(void 0, void 0, void 0, function* () {
    const contactUpdateRepository = data_source_1.AppDataSource.getRepository(contacts_entity_1.Contact);
    const contacts = yield contactUpdateRepository.findOneBy({ id: id });
    if (!contacts) {
        throw new Error("User not found");
    }
    yield contactUpdateRepository.update(contacts.id, {
        name: name,
        email: email,
        telephone,
    });
    const newContact = yield contactUpdateRepository.findOneBy({ id: id });
    return newContact;
});
exports.default = updateContactService;
