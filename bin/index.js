#! /usr/bin/env node

const inquirer = require("inquirer");
const shell = require("shelljs");
const chalk = require("chalk");
const chalkAnimator = require("chalk-animation");
const nanospinner = require("nanospinner");

const path = process.cwd();

const { questionNameOfTheProject, questionFramework, questionTS, questionInfoAbout } = require("../utils/questions");
const links = require("../utils/links");
const chalkAnimation = require("chalk-animation");

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r,ms));
const glitchHacking = chalkAnimator.glitch(chalk.green('Happy hacking')).stop();
const spinnerFolder = nanospinner.createSpinner('Creating the folder for the project');
const redirecting2TheLinks = chalkAnimation.neon('Sending you to see the links').stop();

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
                    shell.exec(`git clone ${links.get('VanillaTS')} ${answersName.nameOfProject}`);
                    console.log(chalk.magenta(`Cloned started files into ${answersName.nameOfProject}`));
                    shell.cd(`${path}/${answersName.nameOfProject}`);
                    glitchHacking.start();
                    await sleep();
                    glitchHacking.stop();
                    shell.exec("code .");
                    shell.exec("exit");
                }else{
                    shell.exec(`mkdir ${answersName.nameOfProject}`);
                    spinnerFolder.start();
                    await sleep();
                    spinnerFolder.success();
                    shell.exec(`git clone ${links.get('Vanilla')} ${answersName.nameOfProject}`);
                    console.log(chalk.magenta(`Cloned started files into ${answersName.nameOfProject}`));
                    shell.cd(`${path}/${answersName.nameOfProject}`);
                    glitchHacking.start();
                    await sleep();
                    glitchHacking.stop();
                    shell.exec("code .");
                    shell.exec("exit");
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
                    shell.cd(`${path}/${answersName.nameOfProject}`);
                    shell.exec(`npm i`);
                    glitchHacking.start();
                    madeBy.start();
                    await sleep();
                    glitchHacking.stop();
                    shell.exec("code .");
                    shell.exec("exit");
                }else{
                    shell.exec(`mkdir ${answersName.nameOfProject}`);
                    spinnerFolder.start();
                    await sleep();
                    spinnerFolder.success();
                    shell.exec(`git clone ${links.get('React')} ${answersName.nameOfProject}`);
                    console.log(chalk.magenta(`Cloned started files into ${answersName.nameOfProject}`));
                    shell.cd(`${path}/${answersName.nameOfProject}`);
                    shell.exec(`npm i`);
                    glitchHacking.start();
                    await sleep();
                    glitchHacking.stop();
                    shell.exec("code .");
                    shell.exec("exit");
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
                    shell.cd(`${path}/${answersName.nameOfProject}`);
                    shell.exec(`npm i`);
                    glitchHacking.start();
                    await sleep();
                    glitchHacking.stop();
                    shell.exec("code .");
                    shell.exec("exit");
                }else{
                    shell.exec(`mkdir ${answersName.nameOfProject}`);
                    spinnerFolder.start();
                    await sleep();
                    spinnerFolder.success();
                    shell.exec(`git clone ${links.get('NextJS')} ${answersName.nameOfProject}`);
                    console.log(chalk.magenta(`Cloned started files into ${answersName.nameOfProject}`));
                    shell.cd(`${path}/${answersName.nameOfProject}`);
                    shell.exec(`npm i`);
                    shell.exec("code .");
                    glitchHacking.start();
                    await sleep();
                    glitchHacking.stop();
                    shell.exec("code .");
                    shell.exec("exit");
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
        }else{
            inquirer.prompt(questionInfoAbout).then(async (answerInfoAbout)=>{
                if(answerInfoAbout.infoAbout == 'Links Used'){
                    redirecting2TheLinks.start();
                    await sleep();
                    shell.exec('start chrome https://github.com/Franciscoborges2002/startProjectCLI/blob/main/utils/links.js');
                    redirecting2TheLinks.stop();
                    shell.exec('exit');
                }
            }).catch((err)=>{
                console.log(chalk.bold.red("error ocurred.\n" + err));
            })
        }

        
    }).catch((err) =>{//if ocurrers errors
        console.log(chalk.bold.red('Error getting answer for framework!\n[ERROR]: ' + err));
    })
    }).catch((err) =>{//if ocurrers errors
        console.log(chalk.bold.red('Error getting answer for the name of the project!\n[ERROR]: ' + err));
    })