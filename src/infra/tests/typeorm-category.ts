import { getRepository } from "typeorm";
import { Category } from "../typeorm/entities";

export const addTypeOrmCategory = async (): Promise<Category> => {
  const repo = getRepository(Category);
  const category = repo.create({ title: "any-title" });

  await repo.save(category);

  return category;
};
