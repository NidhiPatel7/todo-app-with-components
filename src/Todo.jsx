import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class Todo extends Component 
{
    constructor(props)
    {
        super(props)
       //console.log(props);
        //here props is property we got from main class App.jsx we got content & priority
        // in anywhere we want property we do this.props
    }

    handelTodoRemoveClick = () => {
      var id = this.props.id;
      this.props.removeTodo(id);
    }
    render()
    {
        return(
            <div className="todo">
            <div className="todo-body">
              <i className="far fa-times-circle todo-remove" onClick={this.handelTodoRemoveClick}></i>
              <div className="todo-content">
                {this.props.content}
              </div>
              <div className="todo-priority">
              {this.props.priority}
              </div>
            </div>
          </div>
        );
    }
}

export default Todo;