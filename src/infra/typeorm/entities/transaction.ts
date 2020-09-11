import { TransactionModel, CategoryModel } from "@/domain/models";
import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "./category";

@Entity("transactions")
export class Transaction implements TransactionModel {
  @Column("uuid")
  id: string;

  @Column("varchar")
  title: string;

  @Column("decimal")
  value: number;

  @Column("varchar")
  type: "income" | "outcome";

  @Column("uuid")
  category_id: string;

  @ManyToOne(() => Category, (category) => category.transactions, {
    eager: true,
  })
  @JoinColumn({ name: "category_id" })
  category: CategoryModel;
}
