"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const error_middleware_1 = require("./middlewares/error.middleware");
const index_1 = require("./routes/index");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, index_1.appRoutes)(app);
app.use(error_middleware_1.errorMiddleware);
exports.default = app;
