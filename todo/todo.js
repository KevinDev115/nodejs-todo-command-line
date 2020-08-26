const fs = require("fs");
const colors = require("colors");
const { isBoolean } = require("util");

let listTodo = [];

const saveDB = () => {
  let data = JSON.stringify(listTodo);
  fs.writeFile("db/data.json", data, (err) => {
    if (err) throw console.error(err);
  });
};

const loadDB = () => {
  try {
    listTodo = require("../db/data.json");
  } catch (error) {
    listTodo = [];
  }
};

const create = (description) => {
  loadDB();

  let todo = {
    id: Math.floor(Math.random() * 10000),
    description,
    completed: false,
  };

  listTodo.push(todo);

  saveDB();

  return todo;
};

const list = (id = null) => {
  loadDB();

  console.log("---------------------------------".green);
  console.log("|  id    |  desc  | completado  |".green);
  console.log("---------------------------------".green);

  if (id) {
    let todo = listTodo.find((l) => l.id === id);
    console.log(
      `${"|".green}  ${todo.id}  ${"|".green}  ${todo.description}  ${
        "|".green
      } ${todo.completed ? "SI" : "NO"}  `
    );

    console.log("---------------------------------".green);
  } else {
    listTodo.map((l) => {
      console.log(
        `${"|".green}  ${l.id}  ${"|".green}  ${l.description}  ${"|".green} ${
          l.completed ? "SI" : "NO"
        }  `
      );

      console.log("---------------------------------".green);
    });
  }
};

const update = (id, description, completed) => {
  // Cargarmos la base de datos
  loadDB();

  // Buscamos el item en la db
  let todoIndex = listTodo.findIndex((l) => l.id === id);

  if (todoIndex < 0) return console.log(`No hay registro con id ${id}`.yellow);

  if (description) {
    listTodo[todoIndex].description = description;
  }

  if (completed !== undefined) {
    listTodo[todoIndex].completed = isBoolean(completed)
      ? completed
      : completed === "true"
      ? true
      : false;
  }

  saveDB();

  return listTodo[todoIndex];
};

const destroy = (id) => {
  // Cargarmos la base de datos
  loadDB();

  // Buscamos el item en la db
  let todoIndex = listTodo.findIndex((l) => l.id === id);

  if (todoIndex < 0) return console.log(`No hay registro con id ${id}`.yellow);

  let todo = listTodo[todoIndex];

  listTodo.splice(todoIndex, 1);

  saveDB();

  return todo;
};

module.exports = {
  create,
  list,
  update,
  destroy,
};
