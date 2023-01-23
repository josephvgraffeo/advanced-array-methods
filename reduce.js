// .reduce() reduces all values in an array into a single value

const number = [200, 400, 600];
const reduced = number.reduce((total, current) => total + current);

console.log(reduced);