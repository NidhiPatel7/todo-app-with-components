// ===main consept=== => if you repeat something put in component otherwise code goes crazy

// =====steps for new component====
// 1)create new component for new form NewTodoForm.jsx
// 2)in that file we import 
    // import React,{Component} from 'react';
    // import './App.css';
// 3)we add class and export class NewTodoForm(your component name ) extends Component and export default NewTodoForm(component name);
// 4)import component in main App.jsx import NewTodoForm(component name) from './NewTodoForm.jsx'(component file name);
// 5)create own tag from we got html code (your comonent name) how i add in html include(file name).
// 6)same step with all components(todo component)




// so if we change app.js to app.jsx so we have to cahnge in index.js app.js to app.jsx
import React,{Component} from 'react';
// import logo from './logo.svg';
// we create NewTodoForm.jsx so we have to impot here
import NewTodoForm from './NewTodoForm.jsx';
import Todo from './Todo.jsx';
import './App.css';


class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
      todos:[
        {
          id:1,
          content:"Ring peter",
          priority:"Urgent",
        },
        {
          id:2,
          content:"Water plants",
          priority:"Important",
        },
        {
          id:3,
          content:"Study",
          priority:"Important",
        },
      ],
    };

   
  }

  // ====event(method) for add data===
  addTodo = (data) =>
  {
      var newTodo = {
        id:Date.now(),
        ...data
      };

      // console.log(newTodo);
      //  var todos = [todos,...this.state.todos];
      // this.setState({todos});
      var newList = [newTodo,...this.state.todos];
      this.setState({todos:newList});
  }
  // ====event(method) for delete data===
  removeTodo = (id) =>
  {
    
  }
  // ====event(method) for edit data===
  updateTodo = (id,data) =>
  {
    
  }
  render(){
    return (
      <div className="wrap">
        
      <div className="container">
        <div className="todos">
          {/* ===todo ==== */}
          {
            this.state.todos.map((todo) => {
              // console.log(todo);
              var todoProps = {
                ...todo,//... allow to copy list and items
                key:todo.id,
                

              };
              // for list of property
              return(
                // ... allow to copy list and items
                <Todo {...todoProps} />
              );
            })
          }
          {/* <Todo content="Ring peter" priority="Urgent"/> */}
          {/* we create content="Ring peter" &   priority="Urgent"
            which we need and get in Todo.jsx using this.props.content or .priority
        */}
          
          {/* <div className="todo">
            <div className="todo-body">
              <i className="far fa-times-circle todo-remove"></i>
              <div className="todo-content">
                Water the plants
              </div>
              <div className="todo-priority">
                <input type="text" className="form-control form-control-sm" value="Important"/>
              </div>
            </div>
          </div> */}
  
          {/* <div className="todo">
            <div className="todo-body">
              <i className="far fa-times-circle todo-remove"></i>
              <div className="todo-content">
                <input type="text" className="form-control" value="Call Peter"/>
              </div>
              <div className="todo-priority">
                Important
              </div>
            </div>
          </div> */}

          {/* ===new todo edited one==== */}
          {/* if we put newtodo form in NewTodoForm.jsx file we have to create new tag here */}
          <NewTodoForm  addTodo={this.addTodo}/>
          {/* //this is fun addTodo in var addTodo and its call in newtodo.jsx file */}
        </div>
      </div>
    </div>
        );
  }
}

export default App;
