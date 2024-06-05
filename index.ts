#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.cyanBright("\n\t\t WELCOME TO MEHAK-AKRAM PROJECT - ADVENTURE GAME \t\t\n"))


//------------------games-variable-----------------
let enimies: string[] = ["Skeleton", "Zombie", "Worrior", "Assassin"];

let maxEnemyHealth: number = 75;

let enemyAttackDamageToHero = 25;

//------------------players-variable---------------

let heroHealth: number = 100;

let attackDamageToEnemy: number = 50;

let numHealthPotion: number = 3;

let healthPotionHealAmount: number = 30;

let healthPotionDropChance: number = 50;

//------------------While-loop-condition---------------

let gameRunning: boolean = true;

console.log(chalk.bold.bgCyan("Welcome to DeadZone!"));

Game: while (gameRunning) {
  let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
  let enemyIndex = Math.floor(Math.random() * enimies.length);
  let enemy = enimies[enemyIndex];
  console.log(chalk.bold.red(`# ${enemy} has appered #\n`));
  while (enemyHealth > 0) {
    console.log(chalk.magenta(`Your Health: ${heroHealth}`));
    console.log(chalk.magenta(`${enemy} Health: ${enemyHealth}`));

    console.log("-".repeat(60));


    let options = await inquirer.prompt({
      name: "ans",
      type: "list",
      message: "what would you like to do?",
      choices: ["1. Attack", "2. Take Health Potion", "3. Run"],
    });

    if (options.ans === "1. Attack") {
      let damageToEnemy = Math.floor(Math.random() * attackDamageToEnemy + 1);
      let damageToHero = Math.floor(
        Math.random() * enemyAttackDamageToHero + 1
      );

      enemyHealth -= damageToEnemy;
      heroHealth -= damageToHero;

      console.log(chalk.yellow(`you strike the ${enemy} for ${damageToEnemy}`));
      console.log(chalk.yellow(`${enemy} strike you for ${damageToHero}`));
      if (heroHealth < 1) {
        console.log(chalk.bold.red(`you taken to much damage. you are to weak to continue`));
        break;
      }
    } else if (options.ans === "2. Take Health Potion") {
      if (numHealthPotion > 0) {
        heroHealth += healthPotionHealAmount;
        numHealthPotion--;
        console.log(chalk.yellow(`you use health potion for ${healthPotionHealAmount}`));
        console.log(chalk.yellow(`you now have ${heroHealth} health`));
        console.log(chalk.yellow(`you have ${numHealthPotion} health potion left`));
      } else {
        console.log(
          chalk.bold.red(`you have no health potion left.defeat enemy to get a chance to get health potion`)
        );
      }
    } else if (options.ans === "3. Run") {
      console.log(chalk.yellow(`you run away from ${enemy}`));
      continue Game;
    }
  }
  if (heroHealth < 1) {
    console.log(chalk.bold.red(`you are out from battle. you are to weak`));
    break;
  }
  console.log(chalk.yellow(`${enemy} was defeated!`));
  console.log(chalk.yellow(`you have ${heroHealth} health. `));

  let randonNumber = Math.floor(Math.random() * 100 + 1);
  if (randonNumber < healthPotionDropChance) {
    numHealthPotion++;
    console.log(chalk.yellow(`enemy give you health potion.`));
    console.log(chalk.yellow(`you health is ${heroHealth}`));
    console.log(chalk.yellow(`your potion is ${numHealthPotion}`));
  }

  console.log("-".repeat(60));


  let userOption = await inquirer.prompt({
    name: "ans",
    type: "list",
    message: "what would you like to do now",
    choices: ["1. Continue", "2. Exit"],
  });
  if (userOption.ans === "1. Continue") {
    console.log(chalk.yellow(`you are continue your advanture`));
  } else {
    console.log(chalk.bold.bgGreenBright`you are succesfully Exit from DeadZone`);
    break;
  }
  console.log(chalk.bold.bgCyan(`Thank you for playing\n`));
}


