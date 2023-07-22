const Address = require("./Address");
const Person = require("./Person");

const address = new Address("ABZ", 99, "Centro", "Fortaleza", "CE");
const john = new Person("Doe", address);

console.log(john);
console.log(john.address.fullAddress());