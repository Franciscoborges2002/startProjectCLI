#! /usr/bin/env node

const inquirer = require("inquirer");
const shell = require("shelljs");
const chalk = require("chalk");
const chalkAnimator = require("chalk-animation");
const nanospinner = require("nanospinner");

const path = process.cwd();
const path2UseTests = "C:/Users/Andre/Desktop/testes";

const { questionNameOfTheProject, questionFramework, questionTS} = require("../utils/questions");
const links = require("../utils/links");

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r,ms));
const glitchHacking = chalkAnimator.glitch(chalk.green('Happy hacking')).stop();
const spinnerFolder = nanospinner.createSpinner('Creating the folder for the project');

//Ask the name of the project
inquirer.prompt(questionNameOfTheProject).then((answersName) =>{//responses
    //Ask the framework
    inquirer.prompt(questionFramework).then((answersFramework) =>{//responses
        //If it's vanilla
        if(answersFramework.framework === 'Vanilla'){
            //Ask if uses typescript
            inquirer.prompt(questionTS).then(async (answersTS) =>{//responses
                if(answersTS.typescript === 'Yes'){
                    shell.exec(`mkdir ${answersName.nameOfProject}`);
                    spinnerFolder.start();
                    await sleep();
                    spinnerFolder.success();
                    shell.exec(`git clone ${links.get('VanillaJS')} ${answersName.nameOfProject}`);
                    console.log(chalk.magenta(`Cloned started files into ${answersName.nameOfProject}`));
                    shell.cd(`${path2UseTests}/${answersName.nameOfProject}`);
                    shell.exec("code .");
                    glitchHacking.start();
                    await sleep();
                    glitchHacking.stop();
                }else{
                    shell.exec(`mkdir ${answersName.nameOfProject}`);
                    spinnerFolder.start();
                    await sleep();
                    spinnerFolder.success();
                    shell.exec(`git clone ${links.get('Vanilla')} ${answersName.nameOfProject}`);
                    console.log(chalk.magenta(`Cloned started files into ${answersName.nameOfProject}`));
                    shell.cd(`${path2UseTests}/${answersName.nameOfProject}`);
                    shell.exec("code .");
                    glitchHacking.start();
                    await sleep();
                    glitchHacking.stop();
                }
            }).catch((err) =>{//if ocurrers errors
                console.log(error('Error getting answer for typescript!\n[ERROR]: ' + err));
            })
        }else if(answersFramework.framework === 'React'){//If it's react
            //Ask if uses typescript
            inquirer.prompt(questionTS).then(async (answersTS) =>{//responses
                if(answersTS.typescript === 'Yes'){
                    shell.exec(`mkdir ${answersName.nameOfProject}`);
                    spinnerFolder.start();
                    await sleep();
                    spinnerFolder.success();
                    shell.exec(`git clone ${links.get('ReactTS')} ${answersName.nameOfProject}`);
                    console.log(chalk.magenta(`Cloned started files into ${answersName.nameOfProject}`));
                    shell.cd(`${path2UseTests}/${answersName.nameOfProject}`);
                    shell.exec(`npm i`);
                    shell.exec("code .");
                    glitchHacking.start();
                    await sleep();
                    glitchHacking.stop();
                }else{
                    shell.exec(`mkdir ${answersName.nameOfProject}`);
                    spinnerFolder.start();
                    await sleep();
                    spinnerFolder.success();
                    shell.exec(`git clone ${links.get('React')} ${answersName.nameOfProject}`);
                    console.log(chalk.magenta(`Cloned started files into ${answersName.nameOfProject}`));
                    shell.cd(`${path2UseTests}/${answersName.nameOfProject}`);
                    shell.exec(`npm i`);
                    shell.exec("code .");
                    glitchHacking.start();
                    await sleep();
                    glitchHacking.stop();
                }
            }).catch((err) =>{//if ocurrers errors
                console.log(error('Error getting answer for typescript!\n[ERROR]: ' + err));
            })
        }else if(answersFramework.framework === 'NextJS'){//If it's angular
            //Ask if uses typescript
            inquirer.prompt(questionTS).then(async (answersTS) =>{//responses
                if(answersTS.typescript === 'Yes'){
                    shell.exec(`mkdir ${answersName.nameOfProject}`);
                    spinnerFolder.start();
                    await sleep();
                    spinnerFolder.success();
                    shell.exec(`git clone ${links.get('NextJSTS')} ${answersName.nameOfProject}`);
                    console.log(chalk.magenta(`Cloned started files into ${answersName.nameOfProject}`));
                    shell.cd(`${path2UseTests}/${answersName.nameOfProject}`);
                    shell.exec(`npm i`);
                    shell.exec("code .");
                    glitchHacking.start();
                    await sleep();
                    glitchHacking.stop();
                }else{
                    shell.exec(`mkdir ${answersName.nameOfProject}`);
                    spinnerFolder.start();
                    await sleep();
                    spinnerFolder.success();
                    shell.exec(`git clone ${links.get('NextJS')} ${answersName.nameOfProject}`);
                    console.log(chalk.magenta(`Cloned started files into ${answersName.nameOfProject}`));
                    shell.cd(`${path2UseTests}/${answersName.nameOfProject}`);
                    shell.exec(`npm i`);
                    shell.exec("code .");
                    glitchHacking.start();
                    await sleep();
                    glitchHacking.stop();
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