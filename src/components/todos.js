import React, { Component } from 'react';
import TodoItem from './todo-item';

class Todos extends Component {
    // deleteProject(id) {
    //     this.props.onDelete(id);
    // }

    render() {
        let todoItems;
        if (this.props.todos)
        {
            todoItems = this.props.todos.map(todo => {
                // console.log(project);
                return (
                    <TodoItem key={todo.title} todo={todo} />
                );
            });
        }

        return (
            <div className="Todos">
                <h3>Todo List</h3>
                <p>Data taken from an API:</p>
                {todoItems}
            </div>
        );
    }
}

Todos.propTypes = {                  // PropType validation
    todos: React.PropTypes.array,
}

export default Todos;
