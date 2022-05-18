class Client {
  #name;
  #surname;
  #accountNumber;
  #balance;

  constructor(name, surname, accountNumber, balance) {
    this.#name = name;
    this.#surname = surname;
    this.#accountNumber = accountNumber;
    this.#balance = balance;
  }

  get Name() {
    return this.#name;
  }
  get Surname() {
    return this.#surname;
  }
  get AccountNumber() {
    return this.#accountNumber;
  }
  get Balance() {
    return this.#balance;
  }

  set Name(name) {
    this.#name = name;
  }
  set Surname(surname) {
    this.#surname = surname;
  }
  set AccountNumber(accountNumber) {
    this.#accountNumber = accountNumber;
  }
  set Balance(balance) {
    this.#balance = balance;
  }
}
export default Client
