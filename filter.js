// .filter() returns a new array of elments matching criteria
const ages = [11, 21, 33, 45, 51, 67];

const filteredAges = ages.filter( age => age > 18 );

console.log(`Filtered Ages:`,filteredAges);

(filteredAges.length > 1) ? console.log(true) : console.log(false)