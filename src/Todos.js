import React from 'react';

const Todos = ({todos}) => {

    //if(todos.length > 0)
    //{
        const todoList = todos.length ? (todos.map( todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
        ) : (<p className="center">No more Todo's</p>)
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