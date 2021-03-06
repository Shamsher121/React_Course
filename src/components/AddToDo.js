import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddToDo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({ title: ''});
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Add Todo ..."
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="Submit" 
                    name="Submit" 
                    className="btn"
                    style={{flex: '1'}}
                />                 
            </form>
        )
    }
}


//PropTypes
AddToDo.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  }

export default AddToDo
