import { TransactionModel, CategoryModel } from "@/domain/models";
import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";
import { generateUuid } from "@/infra/generators/generate-uuid";
import { Category } from "./category";

@Entity("transactions")
export class Transaction implements TransactionModel {
  @PrimaryColumn("uuid")
  id: string = generateUuid();

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
