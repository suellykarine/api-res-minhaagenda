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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listOneContactController = exports.deleteContactController = exports.updateContactController = exports.listContactController = exports.createContactController = void 0;
const createContact_service_1 = __importDefault(require("../services/contacts/createContact.service"));
const deleteContact_service_1 = __importDefault(require("../services/contacts/deleteContact.service"));
const listContact_service_1 = __importDefault(require("../services/contacts/listContact.service"));
const listOneContact_service_1 = __importDefault(require("../services/contacts/listOneContact.service"));
const updateContact_service_1 = __importDefault(require("../services/contacts/updateContact.service"));
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, telephone } = req.body;
    const newContact = yield (0, createContact_service_1.default)({ name, email, telephone });
    return res.status(201).json(newContact);
});
exports.createContactController = createContactController;
const listContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contact = yield (0, listContact_service_1.default)();
    return res.json(contact);
});
exports.listContactController = listContactController;
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email, telephone } = req.body;
    const contact = yield (0, updateContact_service_1.default)({ id, name, email, telephone });
    return res.status(200).json(contact);
});
exports.updateContactController = updateContactController;
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const contact = yield (0, deleteContact_service_1.default)(id);
    return res.status(200).json({ message: "client deleted with sucess!" });
});
exports.deleteContactController = deleteContactController;
const listOneContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const contact = yield (0, listOneContact_service_1.default)(id);
    return res.status(200).json(contact);
});
exports.listOneContactController = listOneContactController;
