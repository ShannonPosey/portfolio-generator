const fs = require("fs");
const generatePage = require("./src/page-template");

const profileDataArgs = process.argv.slice(2);
console.log(profileDataArgs);

// Destructuring Assignment example
const [name, github] = profileDataArgs;
console.log(name, github);

/* Template literals example
const generatePage = (userName, githubName) => `Name: ${userName}, GitHub: ${githubName}`;*/

/* Multi-line Template Literal Strings example
const generatePage = (userName, githubName) => {
    return `
    Name: ${userName}
    GitHub: ${githubName}
    `;
};*/

fs.writeFile("./index.html", generatePage(name, github), err => {
  // this will display an error message if an error occurs
    if (err) throw new Error (err);
    console.log("Portfolio complete! Check out index.html to see the output!");
});



// const printProfileData = profileDataArr => {
//     // This
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log("================");
//     // Is the same as this ...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);



