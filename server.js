const mysql = requrie("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "company_db",
  },
  console.log("Connected to the books_db databse.")
);

db.connect(err => {
  if(err) throw err;
  console.log("Connected!");
  mainMenu();
});

const mainMenu = () => {
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      message: "Main Menu",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit",
      ],
    })
    .then((answers) => {
      switch (answers.choice) {
        case "View all departments":
          openAllDepartments();
          break;
        case "View all roles":
          openAllRoles();
          break;
        case "View all employees":
          openAllEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployee();
          break;
        case "Exit":
          return;
      }
      mainMenu();
    });
};
