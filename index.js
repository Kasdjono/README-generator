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
            name: 'image',
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

        const { projName, workingUrl, purpose, appFeature,image, tests } = data

        const md = `
## Project Name : ${projName}

## Table of contents :  
* [Links](#link)  
* [Discription](#description)
* [Features](#features)
* [ScreenShots](#screenShots)
* [Test](#test)
* [Licence](#licence)

## Link to the working site

["link to deployed application"](${workingUrl}) 

        
## Description :

    - ${purpose}

        
## Features :

    - ${appFeature}


## ScreenShots:

!["screen shot"](./assets/images/${image})
 
        
## Test :

    - ${tests}
            
        
## Licence :
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)     
`

        fs.writeFile(fileName, md, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });