import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './Addform';

class App extends Component {

  state = {
    todos: [
    ]
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter( todo =>{
      return todo.id !== id
    });
    this.setState({todos});
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({todos});
  }

  render(){
    return (
      <div className="App container">
      <h1 className="center blue-text"> Todo's</h1>
      <Todos todos= {this.state.todos} deleteTodo = {this.deleteTodo} />
      <AddTodo addTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default App;
