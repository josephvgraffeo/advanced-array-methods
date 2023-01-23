// .map() 

// const numbers = [11,22,33,44,55,66,77];
const people = [{firstname: "Joe", lastname: "Graffeo"}, {firstname: "Billy", lastname: "Bob"}, {firstname: "Ricky", lastname: "Bobby"}];

// const numMap = numbers.map( (element) => {
//     console.log(element);
// } );

const peopleMap = people.map( (element, index) => {
    const eachPerson = `person ${index+1}: ${element.firstname} ${element.lastname}`
    console.log(eachPerson);
} );

const peopleMap1 = people.map( (element, index) => {
    const eachPerson = `person ${index+1}: ${element.firstname} ${element.lastname}`
    return element;
} );

console.table(peopleMap1)