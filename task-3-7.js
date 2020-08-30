/*Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 1000,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    // console.log('выполняется createTransaction');
    let transaction = {
      amount: amount,
      type: type,
      id: Math.floor(Math.random() * (Math.floor(1000) - Math.ceil(1)) + Math.ceil(1)),
    };
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    console.log('Происходит пополнение баланса...');

    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    this.balance += amount;
    return `Баланс пополнен на ${amount}$$. Сумма на счету ${this.balance}$$`;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    console.log('Выполняется withdraw');

    if (amount > this.balance) {
      return `Невозможно снять ${amount}$$. Недостаточно средств. Сумма на счету ${this.balance}$$`;
    }

    this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));

    this.balance -= amount;

    return `Успешное снятие ${amount}$$. Сумма на счету ${this.balance}$$`;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Сумма на счету ${this.balance}$$`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (item.id == id) {
        console.log(`Выполняется поиск транзакции ${id}...`);
        return item;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;
    let message = `Транзакции ${type} не найдены`;
    let transactionToFind = '';

    for (const item of this.transactions) {
      if (item['type'] == type) {
        sum += item['amount'];
        transactionToFind = item;
        message = `Общая сумма транзакций: ${sum}$$`;
        console.log('Найдена транзакция: ', transactionToFind);
      }
    }
    return message;
  },
};
