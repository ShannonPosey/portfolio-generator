const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template");

const promptUser = () => {
return inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your Github Username"
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself:"
    }
  ]);
};

const promptProject = portfolioData => {
      console.log(`
    =================
    Add a New Project
    =================
    `);
    // If there's no "projects" array property, create one
  if (!portfolioData.projects) {
  portfolioData.projects = [];
  }
    return inquirer
      .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)"
      },
      {
        type: "checkbox",
        name: "languages",
        message: "What did you build this project with? (Check all that apply)",
        choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
      },
      {
        type: "input",
        name: "link",
        message: "Enter the Github link to your project. (Required)"
      },
      {
        type: "confirm",
        name: "feature",
        message: "Would you like to feature this project?",
        default: false
      },
      {
        type: "confirm",
        name: "confirmAddProject",
        message: "Would you like to enter another project?",
        default: false
      }
      
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        }
        else {
          return portfolioData;
        }
      });
  };

   promptUser()
   .then(promptProject)
   .then(portfolioData => {
     console.log(portfolioData);
   });
  //  .then(projectAnswers => console.log(projectAnswers));

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


