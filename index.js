const fs = require('fs')
const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'fileName',
            message: "What would you like to name this file?",
        },
        {
            type: 'input',
            name: 'projName',
            message: "What is your project's name?",
        },
        {
            type: 'input',
            name: 'workingUrl',
            message: "What is the working URL for your project?",
        },
        {
            type: 'input',
            name: 'purpose',
            message: "What is purpose of your project?",
        },
        {
            type: 'input',
            name: 'appFeature',
            message: "Please list all app features.",
        },
        {
            type: 'input',
            name: 'badge',
            message: "Enter the file name of the png.",
        },
        {
            type: 'input',
            name: 'tests',
            message: "Please list all tests performed.",
        },
    ])



    .then((data) => {
        const fileName = `${data.fileName.toLowerCase().split(' ').join('')}.md`;

        const { projName, workingUrl, purpose, appFeature,badge, tests } = data

        const md = `
## Project Name : ${projName}

## Link to the working site

["link to deployed application"](${workingUrl}) 

        
## Discription of the application:

    - ${purpose}

        
## The following features have been added to the page:

    - ${appFeature}


## Screen shot of working app:

!["screen shot"](./assets/images/${badge})
 
        
## Test performed on application

    - ${tests}
            
        
       
MIT License
Copyright (c) 2021 Nicholas Kasdjono

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`


        fs.writeFile(fileName, md, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });



                   
  





