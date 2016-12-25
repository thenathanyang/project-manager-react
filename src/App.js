import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './components/projects';
import AddProject from './components/add-project';
import Todos from './components/todos';
import './App.css';

class App extends Component {
      constructor() {
          super();
          this.state = {
              projects: [],
              todos: []
          }
      }

      getTodos() {          // Getting data from an API and putting into state
          $.ajax({
              url: 'https://jsonplaceholder.typicode.com/todos',
              dataType: 'json',
              cache: false,
              success: function(data) {
                  this.setState({todos: data}, function() {
                      console.log(this.state);
                  });
              }.bind(this),
              error: function(xhr, status, err) {
                  console.log(err);
              }
          });
      }

      getProjects() {
          this.setState({projects: [
              {
                  id: uuid.v4(),
                  title: 'Business Website',
                  category: 'Web Design'
              },
              {
                  id: uuid.v4(),
                  title: 'Social App',
                  category: 'Mobile Development'
              },
              {
                  id: uuid.v4(),
                  title: 'Ecommerce Shopping Cart',
                  category: 'Web Development'
              }
          ]});
      }

      componentWillMount() {
          this.getProjects();
          this.getTodos();
      }

      componentDidMount() {
          this.getTodos();
      }

      handleAddProject(project) {
          // console.log(project);
          let projects = this.state.projects;
          projects.push(project);
          this.setState({projects:projects});
      }

      handleDeleteProject(id) {
          let projects = this.state.projects;
          let index = projects.findIndex(x => x.id === id);
          projects.splice(index, 1);
          this.setState({projecst:projects});
      }

      render() {
          return (
            <div className="App">
                <h2>Project Manager</h2>
                <AddProject addProject={this.handleAddProject.bind(this)} />
                <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
                <hr />
                <Todos todos={this.state.todos} />
            </div>
        );
    }
}

export default App;