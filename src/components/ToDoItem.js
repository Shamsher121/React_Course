import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ToDoItem extends Component {

    getStyle = () => {
       return { 
           background: 'lightGrey',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed ? 'line-through' : 'none'
       }
    }

    render() {
        const { id, title } = this.props.todo;
        
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                    type="checkbox" 
                    onChange={() => this.props.markComplete(id)}
                    /> 
                    {' '}
                    {title}
                    <button onClick={() => this.props.delToDo(id)} style={btnStyle}>x</button> 
                </p>                
            </div>
        )
    }
}

//PropTypes
ToDoItem.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  }
  
  const btnStyle = {
      background: '#e60000',
      color: 'white',
      border: 'none',
      padding: '5px 9px',
      borderRadius: '50%',
      cursor: 'pointer',
      float: 'right'
  }

export default ToDoItem
