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
const clients_entity_1 = require("../../entities/clients.entity");
const updateClientService = ({ id, name, email, telephone, }) => __awaiter(void 0, void 0, void 0, function* () {
    const clientUpdateRepository = data_source_1.AppDataSource.getRepository(clients_entity_1.Client);
    const clients = yield clientUpdateRepository.findOneBy({ id: id });
    if (!clients) {
        throw new Error("User not found");
    }
    yield clientUpdateRepository.update(clients.id, {
        name: name,
        email: email,
        telephone,
    });
    const newClient = yield clientUpdateRepository.findOneBy({ id: id });
    return newClient;
});
exports.default = updateClientService;
