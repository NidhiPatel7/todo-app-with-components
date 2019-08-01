import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class NewTodoForm extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
          contentInput:'aaa',
          priorityInput:'bbb',
        }
    }
    handelContentInputChange = (e) =>
    {
        this.setState({
          contentInput:e.target.value,
        })
    }
    handelPriorityInputChange = (e) =>
    {
        this.setState({
          priorityInput:e.target.value,
        })
    }
    handelTodoAddClick = (e) =>
    {
      e.preventDefault();
      var data = {
        content:this.state.contentInput,
        priority:this.state.priorityInput,
      }
      this.props.addTodo(data);//this fun is comming from app.jsx
    }
    render()
    {
        return(
            <div className="todo new-todo">
            <form className="todo-body">
                <div className="form-group">
                  <label htmlFor="content-input">Content</label>
                  <input onChange={this.handelContentInputChange} type="text" className="form-control" id="content-input" />
                </div>
  
                <div className="form-group">
                  <label htmlFor="priority-input">Priority</label>
                  <input onChange={this.handelPriorityInputChange} type="text" className="form-control" id="priority-input"/>
                </div>
              {/* todo-add class  here just naming purpose */}
                <button type="submit" onClick={this.handelTodoAddClick} className="btn btn-primary todo-add" >Add</button>
            </form>
          </div>
        );
    }
}

export default NewTodoForm;