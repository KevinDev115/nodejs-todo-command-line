// Requerimos los paquetes necesarios.
const argv = require("./config/yargs").argv;
const todo = require("./todo/todo");

// Obtenemos el comando
let command = argv._[0];

// Validamos el comando
switch (command) {
  case "crear":
  case "create":
    console.log(todo.create(argv.description));
    break;
  case "listar":
  case "list":
    console.log("listar / list");
    break;

  case "actualizar":
  case "update":
    console.log("actualizar / update");

    break;

  default:
    console.log("Comando no reconocido");
    break;
}
