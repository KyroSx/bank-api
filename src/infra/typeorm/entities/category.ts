import { CategoryModel } from "@/domain/models";
import { Entity, Column, OneToMany } from "typeorm";
import { generateUuid } from "@/infra/generators/generate-uuid";
import { Transaction } from "./transaction";

@Entity("categories")
export class Category implements CategoryModel {
  @Column("uuid")
  id: string = generateUuid();

  @Column("varchar")
  title: string;

  @OneToMany(() => Transaction, (transaction) => transaction.category)
  transactions: Transaction[];
}
