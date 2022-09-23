import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./contacts.entity";

@Entity("clients")
export class Client {
  @OneToMany(() => Contact, (contact) => contact.client, { eager: true })
  contacts: Contact[];

  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  telephone: string;

  @CreateDateColumn()
  created_at: Date;
}
