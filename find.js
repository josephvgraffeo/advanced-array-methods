// .find() finds first element in the array that matches the parameter
const ages = [12, 17, 19, 25, 36, 52];

// long way
function checkAge(age) {
    return age > 18
}

const ageAdult = ages.find(checkAge)
console.log(`ageAdult:`, ageAdult);


// Anon funcition version
const ageAdult2 = ages.find( function(age) {
    return age > 18
});

console.log(`ageAdult2:`, ageAdult2);

// Arrow function
const ageAdult3 = ages.find( (age) => {
    return age > 18
} );

console.log(`ageAdult3:`, ageAdult3)

// Arrow function shorthand
const ageAdult4 = ages.find( age => age > 18 );

console.log(`ageAdult4:`, ageAdult4)