// .some() returns true if any element matches criteria
const ages = [11, 21, 33, 45, 51, 67];

const adult1 = ages.some( (age) => {return age > 18} );

console.log(`Adult1: ${adult1}`)