const inquirer = require('inquirer');
inquirer
  .prompt([
    {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
    }
  ])
  .then((answers) => console.log(answers))
  .catch((error) => {
    if (error.isTtyError) {
      console.log('Prompt couldnt be rendered in the current environment');
    } else {
      console.log('Something else went wrong');
    }
  });

// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
