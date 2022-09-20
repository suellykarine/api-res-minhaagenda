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
exports.createTables1663709893134 = void 0;
class createTables1663709893134 {
    constructor() {
        this.name = 'createTables1663709893134';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_5e1236d7feffe204333944ed649"`);
            yield queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "telephone"`);
            yield queryRunner.query(`ALTER TABLE "clients" ADD "telephone" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_5e1236d7feffe204333944ed649" UNIQUE ("telephone")`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_64587cae6751ad9fe10a21b3a46"`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telephone"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "telephone" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_64587cae6751ad9fe10a21b3a46" UNIQUE ("telephone")`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_64587cae6751ad9fe10a21b3a46"`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telephone"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "telephone" integer NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_64587cae6751ad9fe10a21b3a46" UNIQUE ("telephone")`);
            yield queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_5e1236d7feffe204333944ed649"`);
            yield queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "telephone"`);
            yield queryRunner.query(`ALTER TABLE "clients" ADD "telephone" integer NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_5e1236d7feffe204333944ed649" UNIQUE ("telephone")`);
        });
    }
}
exports.createTables1663709893134 = createTables1663709893134;
