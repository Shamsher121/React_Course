import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
import Header from './components/layout/Header';
import * as uuid  from 'uuid';
import axios from 'axios';
import './App.css';


class App extends Component{
  state = {   
    //This was hardcoded data
    // todos: [
    //   {
    //     id: uuid.v4(),
    //     title: 'Buy a coffee',
    //     completed: false
    //   },
    //   {
    //     id: uuid.v4(),
    //     title: 'Buy a chain',
    //     completed: true
    //   },
    //   {
    //     id: uuid.v4(),
    //     title: 'Buy food',
    //     completed: false
    //   }
    // ]

    //Getting Data from JSon API
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))
  }


  // Toggle Complete 
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })  });
  }

  //Delete ToDo
  delToDo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));  
  }

  //Add ToDo
  addToDo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',
    {
      title: title,
      completed: false
    })    
      .then(res => this.setState({todos: [...this.state.todos, res.data]}));
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddToDo addToDo={this.addToDo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delToDo={this.delToDo}/>
              </React.Fragment>
            )}/>   
            <Route path="/about" component={About}/>      
          </div>    
        </div>
      </Router>      
    );    
  }

}

export default App;
