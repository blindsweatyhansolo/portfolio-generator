// saves inquirer package for use
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username',
            validate: githubInput => {
                if (githubInput){
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some info about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            // when gets the user's answers passed to it automatically, will only prompt this if true
            when: ({ confirmAbout }) => {
                if (confirmAbout){
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};

const promptProject = portfolioData => {
    if (!portfolioData.projects){
        portfolioData.projects = [];
    }

    console.log(`
    ===============
    Add a New Project
    ===============
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter a name for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput){
                    return true;
                } else {
                    console.log('A description is required!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project (Required)',
            validate: linkInput => {
                if (linkInput){
                    return true;
                } else {
                    console.log('GitHub link required!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        // places projectData from inqurier prompt into new projects array
        portfolioData.projects.push(projectData);
        // recall promptProject on true / else return object data - CRITICAL STEP!
        if (projectData.confirmAddProject){
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });




// // saves core fs module to variable for use in file
// const fs = require('fs');

// // save local module as variable
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// // create/replace specified file (set to replace using './index.html' which is a newly created file)
// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

// // using a single arguement of 2 is the same as writing (2, profileDataArgs.length)
// const profileDataArgs = process.argv.slice(2);

// // destructured assignment
// const [name, github] = profileDataArgs;


