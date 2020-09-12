import { IFetchOrAddCategoryRepository } from "@/data/protocols/repositories";
import { Repository, getRepository } from "typeorm";
import { Category } from "../../entities";

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
