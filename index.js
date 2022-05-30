var inquirer = require('inquirer');
const cTable = require('console.table');
// get the client
const mysql = require('mysql2');
const Choices = require('inquirer/lib/objects/choices');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Je2653435',
  database: 'employeeTracker'
},
console.log('Connection successful!')
);
// simple query
//connection.query(
  //'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  //function(err, results, fields) {
    //console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
  //}
//);

// with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );
function dbPrompt() {
    inquirer
    .prompt(
        {
        type: 'list',
        name:  'database',
        message: "Select a choice from the given list.",
        choices: [
            "View department database",
            "View role database",
            "View employee database",
            "Add a department to the database",
            "Add a role to the database",
            "Add an employee to the database",
            "Update employee role",
            "Exit"
        ],
    },
)
.then((answers) => {
    switch (answers.dbPrompt) {
        case "View department database":
           dbDepartment().then(( [rows, fields]) => {
               console.table(rows)
           });
           break; 

           case "View role database":
               dbRole();
               break;

            case "View employee database":
            dbEmployee();
            break;

            case "Add a department to the database":
                dbAddDepartment();
                break;

            case "Add a role to the database":
                dbAddRole();
                break;

            case "Add an employee to the database":
                dbAddEmployee();
                break;

            case "Update employee role":
                dbUpdate();
                break;

            case "Exit":
                connection.end();
                break;
    }
});
}

const dbDepartment = () => {
    return connection.promise().execute("SELECT * FROM departments;");
};

const dbRole = () => {
    return connection.promise().execute('SELECT * FROM roles;');
}

dbPrompt()