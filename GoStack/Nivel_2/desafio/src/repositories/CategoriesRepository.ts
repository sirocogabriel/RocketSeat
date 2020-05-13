import Category from '../models/Category';

class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  public all(): Category[] {
    return this.categories;
  }

  public create({ title }: Omit<Category, 'id'>): Category {
    const category = new Category({ title });

    this.categories.push(category);

    return category;
  }
}

export default CategoryRepository;
