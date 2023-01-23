// .splice() 

const sports = ["soccer", "football", "baseball", "basketball", "golf"];
const newSports = [...sports];

// const resultSport = newSports.splice(2);
// const resultSport1 = newSports.splice(2, 1);
newSports.splice(2,0,"surfing");

// console.log(`resultSport: `,resultSport)
// console.log(`resultSport1: `,resultSport1)
console.log(`when mutating array: `, newSports)