var app = angular.module("todoapp" , []);
app.controller("todoctrl" , todoctrl)

function todoctrl() {
  this.editMode = false ;
  this.todos = [
    


  ];

  this.addNewItem = function(){
     this.todos.push(this.newTodo);
     this.newTodo = "";

  }

  this.editList = function () {

    this.editMode = !this.editMode ;
    
  }

  this.deleteList = function (position) {
    this.todos.splice(position,1);


  }
}
