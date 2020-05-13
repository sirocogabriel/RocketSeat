import { uuid } from 'uuidv4';
import Category from './Category';

class Transaction {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  category: Category;

  constructor({ title, value, type, category }: Omit<Transaction, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
    this.category = category;
  }
}

export default Transaction;
