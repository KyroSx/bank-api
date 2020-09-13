import { Repository, getRepository } from "typeorm";
import {
  Category,
  IFetchOrAddCategoryRepository,
} from "./typeorm-categories-repository-protocols";

export class TypeOrmCategoriesRepository
  implements IFetchOrAddCategoryRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  async fetchOrAddByTitle(title: string): Promise<Category> {
    const categoryExisting = await this.ormRepository.findOne({
      where: { title },
    });

    const category = categoryExisting || this.ormRepository.create({ title });

    await this.ormRepository.save(category);

    return category;
  }
}
