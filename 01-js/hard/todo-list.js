/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todo=[];
  }
  add(todo){
    this.todo.push(todo);
  }

  remove(indexOfTodo){
    this.todo.splice(indexOfTodo,1)
  }

  update(index,updatedTodo){
    if(index < this.todo.length)
    this.todo[index]=updatedTodo;
  }

  getAll(){
    return this.todo;
  }

  get(indexOfTodo){
    if(indexOfTodo < this.todo.length)
    return this.todo[indexOfTodo]
    else
    return null;
  }

  clear(){
    this.todo = [];
  }

}

let to=new Todo();
to.add("hello");
to.add("dola")
//to.remove(0);
//to.update(0,"hello");



console.log(to.clear());
module.exports = Todo;
