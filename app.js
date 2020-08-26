// Requerimos los paquetes necesarios.
const argv = require("./config/yargs").argv;
const todo = require("./todo/todo");

// Obtenemos el comando
let command = argv._[0];

// Validamos el comando
switch (command) {
  case "crear":
  case "create":
    console.log(`Tarea creada: ${todo.create(argv.description)}`);
    break;
  case "listar":
  case "list":
    todo.list(argv.id);
    break;

  case "actualizar":
  case "update":
    console.log(`Tarea actualizada:`);
    console.log(todo.update(argv.id, argv.description, argv.completed));
    break;
  case "borrar":
  case "delete":
    console.log(`Tarea eliminada:`);
    let todoDestroy = todo.destroy(argv.id);
    if (todoDestroy) console.log(todoDestroy);
    break;

  default:
    console.log("Comando no reconocido");
    break;
}
