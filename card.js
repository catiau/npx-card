#!/usr/bin/env node


const boxen = require("boxen");
const chalk = require("chalk");


const data = {
    name: chalk.bold.green("                     Cauan Teixeira"),
    twitter: chalk.hex('#00A1D9')("cauantt007@gmail.com"),
    github: chalk.hex('#787878')("https://github.com/catiau"),
    linkedin: chalk.hex('#A959FF')("https://www.linkedin.com/in/cauan-teixeira-2480a2210/"),
    npx: chalk.hex('#A1AB00')("npx catiau"),

    labelTwitter: chalk.hex('#629DFF').bold(" Twitter:"),
    labelGitHub: chalk.hex('#9E9E9E').bold(" GitHub:"),
    labelLinkedin: chalk.hex('#A959FF').bold(" Linkedin:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        ``,
        `${data.labelEmail}  ${data.email}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedin}  ${data.linkedin}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Olá, meu nome é Cauan. Sou Baiano, tenho 18 anos. Atualmente estou " 
        )}`,
        `${chalk.bold("estudando sobre Javascript, React.js e pretendo cosenguir um empre-")}`,
        `${chalk.bold(
            "go na área o quanto antes. "
        )}`
    ].join("\n"), {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

console.log(me);
