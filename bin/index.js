#! /usr/bin/env node

const inquirer = require("inquirer");
const shell = require("shelljs");
const chalk = require("chalk");

const path = process.cwd();
const path2UseTests = "C:/Users/Andre/Desktop/testes";

const { questionNameOfTheProject, questionFramework, questionTS} = require("../utils/questions");
const links = require("../utils/links");

//Ask the name of the project
inquirer.prompt(questionNameOfTheProject).then((answersName) =>{//responses
    //Ask the framework
    inquirer.prompt(questionFramework).then((answersFramework) =>{//responses
        //If it's vanilla
        if(answersFramework.framework === 'Vanilla'){
            //Ask if uses typescript
            inquirer.prompt(questionTS).then((answersTS) =>{//responses
                if(answersTS.typescript === 'Yes'){
                    //If is vanilla and uses typescript
                }else{
                    shell.exec(`mkdir ${answersName.nameOfProject}`);
                    console.log(chalk.green('Created a folder for the project'));
                    shell.exec(`git clone ${links.get('Vanilla')} ${answersName.nameOfProject}`);
                    console.log(chalk.magenta(`Cloned started files into ${answersName.nameOfProject}`));
                    shell.cd(`${path2UseTests}/${answersName.nameOfProject}`);
                    shell.exec("code .");
                    console.log(chalk.green('Happy hacking'));
                }
            }).catch((err) =>{//if ocurrers errors
                console.log(error('Error getting answer for typescript!\n[ERROR]: ' + err));
            })
        }else if(answersFramework.framework === 'React'){//If it's react
            //Ask if uses typescript
            inquirer.prompt(questionTS).then((answersTS) =>{//responses
                if(answersTS.typescript === 'Yes'){
                    //If is react and uses typescript
                }else{
                    //If is react and do not use typescript 
                }
            }).catch((err) =>{//if ocurrers errors
                console.log(error('Error getting answer for typescript!\n[ERROR]: ' + err));
            })
        }else if(answersFramework.framework === 'Angular'){//If it's angular
            //Ask if uses typescript
            inquirer.prompt(questionTS).then((answersTS) =>{//responses
                if(answersTS.typescript === 'Yes'){
                    //If is angular and uses typescript
                }else{
                    //If is angular and do not use typescript 
                }
            }).catch((err) =>{//if ocurrers errors
                console.log(error('Error getting answer for typescript!\n[ERROR]: ' + err));
            })
        }else if(answersFramework.framework === 'Svelte'){//If it's svelt
            //Ask if uses typescript
            inquirer.prompt(questionTS).then((answersTS) =>{//responses
                if(answersTS.typescript === 'Yes'){
                    //If is svelt and uses typescript
                }else{
                    //If is svelt and do not use typescript 
                }
            }).catch((err) =>{//if ocurrers errors
                console.log(error('Error getting answer for typescript!\n[ERROR]: ' + err));
            })
        }else if(answersFramework.framework === 'VueJS'){//If it's VueJS
            //Ask if uses typescript
            inquirer.prompt(questionTS).then((answersTS) =>{//responses
                if(answersTS.typescript === 'Yes'){
                    //If is VueJS and uses typescript
                }else{
                    //If is VueJS and do not use typescript 
                }
            }).catch((err) =>{//if ocurrers errors
                console.log(error('Error getting answer for typescript!\n[ERROR]: ' + err));
            })
        }

        
    }).catch((err) =>{//if ocurrers errors
        console.log(error('Error getting answer for framework!\n[ERROR]: ' + err));
    })
    }).catch((err) =>{//if ocurrers errors
        console.log(error('Error getting answer for the name of the project!\n[ERROR]: ' + err));
    })



