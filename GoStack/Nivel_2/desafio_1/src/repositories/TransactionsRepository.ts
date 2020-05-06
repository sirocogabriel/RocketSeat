import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    const balance = this.getBalance();

    return this.transactions;
  }

  public getBalance(): Balance {
    let income = 0;
    let outcome = 0;
    this.transactions.map(transaction => {
      if (transaction.type == 'income') {
        income = income + transaction.value;
      } else {
        outcome = outcome + transaction.value;
      }
    });
    const total = income - outcome;
    const balance: Balance = {
      income,
      outcome,
      total,
    };
    return balance;
  }

  public create({ title, value, type }: Omit<Transaction, 'id'>): Transaction {
    const balance = this.getBalance();
    const transaction = new Transaction({ title, value, type });
    if (transaction.type == 'outcome') {
      if (balance.total - transaction.value < 0) {
        throw Error('Value of outcome is bigger than total');
      }
    }

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
