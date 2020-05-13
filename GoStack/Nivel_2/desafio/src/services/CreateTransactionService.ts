import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import CategoriesRepository from '../repositories/CategoriesRepository';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({
    title,
    value,
    type,
    category,
  }: Omit<Transaction, 'id'>): Transaction {
    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
      category,
    });

    return transaction;
  }
}

export default CreateTransactionService;
