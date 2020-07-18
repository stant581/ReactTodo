import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    //if(todos.length > 0)
    //{
        const todoList = todos.length ? (todos.map( todo => {
            return (
                <div className="collection-item center" key={todo.id} onClick = { () => {deleteTodo(todo.id)}}>
                    <span>{todo.content}</span>
                    
                </div>
            )
        })
        ) : (<p className="center">Couldn't find any content. You can add below</p>)
    return (
        <div className="todos collection">
        {todoList}
        </div>
    )
    //}
    //else{
    //    const todoList = (<p className="center">No more Todo's</p>)
    //    return (
     //       <div className="todos collection">
      //      {todoList}
       //     </div>
        //)
    //}
    
}

export default Todos;