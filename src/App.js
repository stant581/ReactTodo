import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './Addform';

class App extends Component {

  state = {
    todos: [
      { id: 1, content: 'Write your first React App'},
      { id: 2, content: 'Learn it well before writing'}
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
