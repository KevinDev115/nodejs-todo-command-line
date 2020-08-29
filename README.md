# 💻 Todo Command Line

This is a command line todo CRUD created with the NodeJS runtime environment, in order to learn the tools that NodeJs offers.

## ⚙ Installation

- Clone the repository
```sh
$ git clone https://github.com/KevinDev115/nodejs-todo-command-line.git
```

- Install packages 
```sh
$ npm install
```

##  Commands

To see the command list you must execute the command `$ node app --help` within the application:

![Command Help](https://firebasestorage.googleapis.com/v0/b/react-native-restaurants-8dbbf.appspot.com/o/img%2Fhelp.png?alt=media&token=9183775a-e804-408b-b355-bc6ffb7cbc64)  

If you want to know the parameters that a command has, you just have to put the `--help` after each command like this:

![Command Help Params](https://firebasestorage.googleapis.com/v0/b/react-native-restaurants-8dbbf.appspot.com/o/img%2Fcreate_help.png?alt=media&token=fd8351fa-d1fe-45a6-9e64-d45c13325095)  

### Command List

This command show a table with th list todo, just by running the command `node app list` or `node app listar`.

Params
  - `-i, --id`: This parameter serves to only bring a task according to its id.
  
 Result:
 
![Command List](https://firebasestorage.googleapis.com/v0/b/react-native-restaurants-8dbbf.appspot.com/o/img%2Flist.png?alt=media&token=14d5b38c-f50a-4786-aff6-791930514fb7)  

Result param id: 

![Command List](https://firebasestorage.googleapis.com/v0/b/react-native-restaurants-8dbbf.appspot.com/o/img%2Flist_id.png?alt=media&token=31911912-1d8b-4720-b7f2-130dbe9a63f1)  

### Command Create

This command is used to create a new todo, just by running the command `node app create` or `node app crear` with their respective parameters.

params
  - `-d, --description`: This is description of the todo.
  
result: 

![Command Create](https://firebasestorage.googleapis.com/v0/b/react-native-restaurants-8dbbf.appspot.com/o/img%2Fcreate.png?alt=media&token=529b9b64-4a66-4951-9de9-c786a7c77855)  

### Command Update

This command updates a todo according to its id by executing the command `node app update` or `node app actualizar` with their respective parameters.

params
  - `-i, --id`: This is the ID of the todo.
  - `-d, --description`: This is the description of the todo to be updated.
  - `-c, --completed`: This parameter indicates if the task has already been updated or if it is still pending authorization.
  
result: 
![Command Update](https://firebasestorage.googleapis.com/v0/b/react-native-restaurants-8dbbf.appspot.com/o/img%2Fupdate.png?alt=media&token=f7069cf6-c862-4fe4-ab00-b93ba001baa1)  

In the list: 

![Command Update](https://firebasestorage.googleapis.com/v0/b/react-native-restaurants-8dbbf.appspot.com/o/img%2Fupdate_list_desc.png?alt=media&token=d2fe0678-fbd4-4f16-868a-5d413e284cc4)  

If you want to complete a todo, just pass the parameter `-c` just like that or with the value of `true`


result:

![Command Update](https://firebasestorage.googleapis.com/v0/b/react-native-restaurants-8dbbf.appspot.com/o/img%2Fupdate_complete.png?alt=media&token=a25ecf8d-70ea-414f-8da1-f37ea42b64ac)  

In the list: 

![Command Update](https://firebasestorage.googleapis.com/v0/b/react-native-restaurants-8dbbf.appspot.com/o/img%2Flist_update_complete.png?alt=media&token=8bbe293e-0517-4320-996f-b80897afb7e9)  


### Command Delete

This command delete a todo according to your id.

params
  - `-i, --id`: This is the ID of the todo.
  
result:

![Command Update](https://firebasestorage.googleapis.com/v0/b/react-native-restaurants-8dbbf.appspot.com/o/img%2Fdelete.png?alt=media&token=dd13c5fa-73b4-40c4-b8b1-3e8a21e9f5ab)  
## packages

  - [yargs ^15.4.1](https://www.npmjs.com/package/yargs) 
  - [colors ^1.4.0](https://www.npmjs.com/package/colors) 

  
