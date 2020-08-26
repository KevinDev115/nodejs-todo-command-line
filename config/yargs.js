const createOptions = {
  description: {
    demand: true,
    alias: "d",
    desc: "Descripcion de la tarea por hacer",
  },
};
const listOptions = {
  id: {
    alias: "i",
    desc: "Id de la tarea a buscar.",
  },
};
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
  completed: {
    alias: "c",
    default: true,
    desc: "Marca como completado o pendiente la tarea la tarea",
  },
};
const desctroyOptions = {
  id: {
    alias: "i",
    demand: true,
    desc: "Id de la tarea a eliminar.",
  },
};

const argv = require("yargs")
  .command("crear", "Crear una nueva tarea.", createOptions)
  .command("create", "Create a new todo.", createOptions)
  .command("listar", "Listar las tareas.", listOptions)
  .command("list", "List todo.", listOptions)
  .command("actualizar", "Actualizar una tarea.", updateOptions)
  .command("update", "Update todo.", updateOptions)
  .command("borrar", "Elimina una tarea.", desctroyOptions)
  .command("delete", "Destroy todo.", desctroyOptions)
  .help().argv;

module.exports = {
  argv,
};
