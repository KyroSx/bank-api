import { Repository, getRepository } from "typeorm";
import { Category } from "../../entities";

export class TypeOrmCategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  async fetchByTitle(title: string) {
    const category = this.ormRepository.create({ title });

    await this.ormRepository.save(category);

    return category;
  }
}