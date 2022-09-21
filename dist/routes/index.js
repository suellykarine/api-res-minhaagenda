"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const client_routes_1 = __importDefault(require("./client.routes"));
const contact_routes_1 = __importDefault(require("./contact.routes"));
const appRoutes = (app) => {
    app.use("/client", client_routes_1.default);
    app.use("/contact", contact_routes_1.default);
};
exports.appRoutes = appRoutes;
exports.default = exports.appRoutes;
