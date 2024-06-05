#! /usr/bin/env node
//SHAPANG
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstumber" },
    { message: "enter 2nd number", type: "number", name: "secondnumber" },
    {
        message: "select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "substraction", "multiplication", "division"],
    },
]);
console.log(answer);
//conditions statement
if (answer.operator === "addition") {
    console.log(answer.firstumber + answer.secondnumber);
}
else if (answer.operator === "substraction") {
    console.log(answer.firstumber - answer.secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstumber / answer.secondnumber);
}
else {
    console.log("select valid number");
}
