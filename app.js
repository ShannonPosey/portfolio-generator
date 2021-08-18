const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const {writeFile, copyFile} = require("./utils/generate-site.js");

const promptUser = () => {
return inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: nameInput => {
        if (nameInput) {
          return true;
        }
        else {
          console.log("Please enter your name!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "github",
      message: "Enter your Github Username (Required)",
      validate: githubInput => {
        if (githubInput) {
          return true;
        }
        else {
          console.log("Please enter your Github Username");
          return false;
        }
      }
    },
    {
      type: "confirm",
      name: "confirmAbout",
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself:",
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        }
        else {
          return false;
        }
      }
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
        message: "What is the name of your project? (Required)",
        validate: projectNameInput => {
          if (projectNameInput) {
            return true;
          }
          else {
            console.log("Please enter name of your project");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)",
        validate: projectDescription => {
          if (projectDescription) {
            return true;
          }
          else {
            console.log("Please provide a description of your project");
            return false;
          }
        }
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
        message: "Enter the Github link to your project. (Required)",
        validate: githubLink => {
          if (githubLink) {
            return true;
          }
          else {
            console.log("Please provide link to Github project");
            return false;
          }
        }
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
     return generatePage(portfolioData);
   })
   .then(pageHTML => {
     return writeFile(pageHTML);
   })
   .then(writeFileResponse => {
     console.log(writeFileResponse);
     return copyFile();
   })
   .then(copyFileResponse => {
     console.log(copyFileResponse);
   })
   .catch(err =>{
     console.log(err);
   });






/*
=================================================================================
                
                      Examples to refer back to later

===============================================================================
*/                  

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
};
 promptUser()
 .then(promptProject)
 .then(portfolioData => {
 fs.writeFile("./dist/index.html", pageHTML, err => {
  // this will display an error message if an error occurs
    if (err){
      console.log(err);
      return;
    } 
    console.log("Page created! Check out index.html in this directory to see it!");

    fs.copyFile("./src/style.css", "./dist/style.css", err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Style sheet copied successfully!");
    });
});
});
*/


