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
exports.listOneClientController = exports.deleteClientController = exports.updateClientController = exports.listClientController = exports.createClientController = void 0;
const createClient_Service_1 = __importDefault(require("../services/clients/createClient.Service"));
const deleteClientService_1 = __importDefault(require("../services/clients/deleteClientService"));
const listClient_Service_1 = __importDefault(require("../services/clients/listClient.Service"));
const listOneClient_service_1 = __importDefault(require("../services/clients/listOneClient.service"));
const updateClientService_1 = __importDefault(require("../services/clients/updateClientService"));
const createClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, telephone, created_at } = req.body;
    const newClient = yield (0, createClient_Service_1.default)({
        name,
        email,
        telephone,
        created_at,
    });
    return res.status(201).json(newClient);
});
exports.createClientController = createClientController;
const listClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, listClient_Service_1.default)();
    return res.json(client);
});
exports.listClientController = listClientController;
const updateClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email, telephone } = req.body;
    const client = yield (0, updateClientService_1.default)({ id, name, email, telephone });
    return res.status(200).json(client);
});
exports.updateClientController = updateClientController;
const deleteClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const client = yield (0, deleteClientService_1.default)(id);
    return res.status(200).json({ message: "client deleted with sucess!" });
});
exports.deleteClientController = deleteClientController;
const listOneClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const client = yield (0, listOneClient_service_1.default)(id);
    return res.status(200).json(client);
});
exports.listOneClientController = listOneClientController;
