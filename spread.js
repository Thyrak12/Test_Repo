let first = [1,2,3];
let second = [4,5,6];

const combined = [...first, ...second];
console.log(combined);

// String 'hello' to array ['h', 'e', 'l', 'l', 'o']
const chars = [...'hello']
console.log(chars);

// Rest
let numbers = [1,2,3,4,5];
let [one, two, ...others] = numbers;
console.log(others);

const person = { name: "Alice", age: 25, city: "Paris" };
const { name, ...rest } = person;
console.log(name);
