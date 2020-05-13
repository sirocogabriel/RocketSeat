import Transaction from '../models/Transaction';

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public create({
    title,
    value,
    type,
    category,
  }: Omit<Transaction, 'id'>): Transaction {
    const transaction = new Transaction({ title, value, type, category });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
