#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

async function StudentManagement() {

    function rollNumberGenrating() {
        
        return Math.floor(Math.random() * 10000 + 1000)
    }

    class Student {
        name: string
        age: string
        rollNumber: number
        selectedCourse: string
        feesPaid: string

        constructor(name: string, age: string, rollNumber: number, selectedCourse: string, feesPaid: string) {
            this.name = name
            this.age = age
            this.rollNumber = rollNumber
            this.selectedCourse = selectedCourse
            this.feesPaid = feesPaid
        }
    }


    let courseFees: { [key: string]: number } = {
        HTML: 500,
        CSS: 700,
        JavaScript: 1200,
        TypeScript: 1500,
        React: 1800,
        NextJs: 1800,
        Python: 2000
    }

    let NameStudent = await inquirer.prompt([{
        name: "name",
        message: chalk.yellowBright.bold("Enter your name."),
        type: "input"
    }])

    let studentName = NameStudent.name

    if(studentName == ""){
        console.log(chalk.red.bold("> Please enter a name"))
        process.exit()
    }

    let Studentage = await inquirer.prompt([{
        name: "age",
        message: chalk.bold.yellowBright("Enter your age."),
        type: "number"
    }])

    let age = Studentage.age

    if (age != age) {
        console.log(chalk.red.bold("> Please enter a valid number"))
        process.exit()
    }

    let aboutCourse = await inquirer.prompt([{
        name: "course",
        message: chalk.bold.yellowBright("Select any one of the following courses."),
        type: "list",
        choices: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "NextJs", "Python"]
    }])

    let course = aboutCourse.course

    console.log(chalk.greenBright.bold(`> You have selected ${course} and it's fess is ${courseFees[course]}`))

    let aboutFees = await inquirer.prompt([{
        name: "fees",
        message: chalk.red.bold("Enter the course fees."),
        type: "number"
    }])

    let fees = aboutFees.fees

    if (fees !== courseFees[course]) {
        console.log(chalk.red.bold("> The fees is Incorrect, enter the exact amount of fees."))
        process.exit()
    }

    console.log(chalk.greenBright(`\n> Congratulations! you have been selected in the course ${course}..\n`))

    let seeResult = await inquirer.prompt([{
        name: "result",
        message: chalk.yellow("Do you want to see status"),
        type: "list",
        choices: ["See Status", "Exit"]
    }])

    let result = seeResult.result

    let aboutStudent = new Student("smth", "smth", 0, "smth", "smthhhhhhh")

    aboutStudent.age = age
    aboutStudent.name = studentName
    aboutStudent.selectedCourse = course
    aboutStudent.feesPaid = "Yes"

    if(result === "See Status"){
        console.log(chalk.blueBright.bold.underline("\n \t\t Viewing Status\t\t\n"))
        console.log(chalk.greenBright.bold(`> Student's name : ${aboutStudent.name}`))
        console.log(chalk.greenBright.bold(`> Student's age : ${aboutStudent.age}`))
        console.log(chalk.greenBright.bold(`> Student's RollNumber : ${rollNumberGenrating()}`))
        console.log(chalk.greenBright.bold(`> Student's course : ${aboutStudent.selectedCourse}`))
        console.log(chalk.greenBright.bold(`> Fees Paid : ${aboutStudent.feesPaid}`))
    }
}

StudentManagement()