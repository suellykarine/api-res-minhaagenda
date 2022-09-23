import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./clients.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Client, (client) => client.contacts)
  client: Client;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  telephone: string;
}
