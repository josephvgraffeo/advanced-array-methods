// .sort() sorts array elements alphabetically
// .reverse() reverses order of elements in the array
// these methods mutate the array so make a copy of it before you use them
let pages = [
    "home.html", 
    "about.html", 
    "portfolio.html", 
    "socialmedia.html", 
    "contact.html"
];

const pagesCopy = [...pages]

const sortedPages = pagesCopy.sort();
const pagesSortReversed = pagesCopy.reverse();

console.log(`Original array: ${pages}`);
console.log(`Sorted array: ${sortedPages}`);
console.log(`Original array: ${pagesSortReversed}`);