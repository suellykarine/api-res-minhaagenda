"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
// src/data-source.ts
require("reflect-metadata");
const typeorm_1 = require("typeorm");
require("dotenv").config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: false,
    entities: ["src/entities/*.entity.ts"],
    migrations: ["src/migrations/*.ts"],
});
// AppDataSource.initialize()
//   .then(() => {
//     console.log("Data Source initialized");
//   })
//   .catch((err) => {
//     console.error("Error during Data Source initialization", err);
//   });
