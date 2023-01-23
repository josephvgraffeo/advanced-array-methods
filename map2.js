const site = [ 
    {
        title: "About",
        url: "about.html",
        color: "red"
    },

    {
        title: "Portfolio",
        url: "portfolio.html",
        color: "blue"
    },

    {
        title: "Contact",
        url: "contact.html",
        color: "pink"
    }
];

// const siteMap = site.map( (element, index) => {

//     console.log(`The site page is ${element.title}, and the index of that is ${index}`);
// });

site.forEach( (element, index) => {
    const sentence = `${index}: The title is ${element.title} the url is ${element.url} and the color is ${element.color}.`
    console.log(sentence)
} );
