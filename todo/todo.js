const fs = require("fs");

let listTodo = [];

const saveDB = () => {
  let data = JSON.stringify(listTodo);
  fs.writeFile("../db/data.json", data, (err) => {
    if (err) throw new Error("Error save DB.");
  });
};

const create = (description) => {
  let todo = {
    id: Math.floor(Math.random() * 10000),
    description,
    complete: false,
  };

  listTodo.push(todo);

  saveDB();

  return todo;
};

module.exports = {
  create,
};
