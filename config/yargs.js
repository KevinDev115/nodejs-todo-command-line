const createOptions = {
  description: {
    demand: true,
    alias: "d",
    desc: "Descripcion de la tarea por hacer",
  },
};
const listOptions = {};
const updateOptions = {
  id: {
    alias: "i",
    demand: true,
    desc: "Id de la tarea a actualizar.",
  },
  description: {
    alias: "d",
    desc: "Descripcion de la tarea por hacer",
  },
  complete: {
    alias: "c",
    default: true,
    desc: "Marca como completado o pendiente la tarea la tarea",
  },
};

const argv = require("yargs")
  .command("crear", "Crear una nueva tarea.", createOptions)
  .command("create", "Create a new todo.", createOptions)
  .command("listar", "Listar las tareas.", listOptions)
  .command("list", "List todo.", listOptions)
  .command("actualizar", "Actualizar una tarea.", updateOptions)
  .command("update", "Update todo.", updateOptions)
  .help().argv;

module.exports = {
  argv,
};
