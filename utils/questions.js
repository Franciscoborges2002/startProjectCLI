const questionNameOfTheProject = [
    {
        type: 'input',
        name: 'nameOfProject',
        message: 'What is the name of the new Project:'
    }
];

const questionFramework = [
    {
        type: 'list',
        name: 'framework',
        message: 'Choose the JS framework which you are using:',
        choices: ['Vanilla', 'React', 'NextJS', 'Svelte', 'VueJS', 'infoAbout']
    }
];

const questionTS = [
    {
        type: 'list',
        name: 'typescript',
        message: 'Does your project use Typescript',
        choices: ['Yes', 'No']
    }
]

const questionInfoAbout = [
    {
        type: 'list',
        name: 'infoAbout',
        message: 'What you want to know about',
        choices: ['Links Used']
    }
]

module.exports.questionNameOfTheProject = questionNameOfTheProject;
module.exports.questionFramework = questionFramework;
module.exports.questionTS = questionTS;
module.exports.questionInfoAbout = questionInfoAbout;