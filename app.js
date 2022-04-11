// saves core fs module to variable for use in file
const fs = require('fs');

// save local module as variable
const generatePage = require('./src/page-template.js');

// using a single arguement of 2 is the same as writing (2, profileDataArgs.length)
const profileDataArgs = process.argv.slice(2);

// destructured assignment
const [name, github] = profileDataArgs;

// create/replace specified file (set to replace using './index.html' which is a newly created file)
fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});
