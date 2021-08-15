const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    }
  ])
  .then(answers => console.log(answers));

// const pageHTML = generatePage(name,github);

// fs.writeFile("./index.html", pageHTML, err => {
  // this will display an error message if an error occurs
//     if (err) throw (err);
//     console.log("Portfolio complete! Check out index.html to see the output!");
// });



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

// const profileDataArgs = process.argv.slice(2);
// console.log(profileDataArgs);

// Destructuring Assignment example
// const [name, github] = profileDataArgs;
// console.log(name, github);

/* Template literals example
const generatePage = (userName, githubName) => `Name: ${userName}, GitHub: ${githubName}`;*/

/* Multi-line Template Literal Strings example
const generatePage = (userName, githubName) => {
    return `
    Name: ${userName}
    GitHub: ${githubName}
    `;
};*/


