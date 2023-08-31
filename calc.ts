import inquirer from "inquirer";

let answers = await inquirer.prompt([{
    name: "n1",
    type: "number",
    message: "Enter First Number : "
},
{
    name: "n2",
    type: "number",
    message: "Enter Second Number : "
},
{
    name: "operater",
    type: "list",
    choices: ["Add","Sub","Mul","Div"],
    message: "Enter Choice : "
}



])

if (answers.operater=="Add"){
    console.log(answers.n1+answers.n2)
}
else if (answers.operater=="Sub"){
    console.log(answers.n1-answers.n2)
}
else if (answers.operater=="Mul"){
    console.log(answers.n1*answers.n2)
}
else if (answers.operater=="Div"){
    console.log(answers.n1/answers.n2)
}