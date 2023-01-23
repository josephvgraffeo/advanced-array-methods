// .join()

const fruits = ["apple", "blueberry", "cantaloupe", "dates", "eggplant"];
const newText = fruits.join();
const newText2 = fruits.join(" ");
const newText3 = fruits.join("🥶");

console.log(`join():`, newText);
console.log(`join(" "):`, newText2);
console.log(`join("🥶"):`, newText3);