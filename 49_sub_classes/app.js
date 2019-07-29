class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership){
    // super calls for methods from the parent class
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }
  // Accessible by refering to the object and not an instance
  static getMembershipCost(){
    return 500;
  }
}

const john = new Customer('John', 'Doe', '43434343', 'Standard');

console.log(Customer.getMembershipCost());