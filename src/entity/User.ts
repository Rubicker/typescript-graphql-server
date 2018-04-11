import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "boolean", default: false })
  confirmed: boolean;

  @Column() lastName: string;

  @Column() age: number;
}
