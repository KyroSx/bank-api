import { CategoryModel } from "@/domain/models";
import { Entity, Column, OneToMany } from "typeorm";
import { Transaction } from "./transaction";

@Entity("categories")
export class Category implements CategoryModel {
  @Column("uuid")
  id: string;

  @Column("varchar")
  title: string;

  @OneToMany(() => Transaction, (transaction) => transaction.category)
  transactions: Transaction[];
}
