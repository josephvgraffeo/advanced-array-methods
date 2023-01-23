// .slice()

const fruits = ["apple", "blueberry", "cantaloupe", "dates", "elephant"];

const newFruits = fruits.slice(1,3);
const newFruits1 = fruits.slice(1);
const newFruits2= fruits.slice(-1);

console.log(`slice (1,3): `, newFruits);
console.log(`slice (1): `, newFruits1);
console.log(`slice (-1): `, newFruits2);
