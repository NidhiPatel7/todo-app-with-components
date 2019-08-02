// ===main consept=== => if you repeat something put in component otherwise code goes crazy
//=>all method in main file app.js call method in particular file 

// =====steps for new component====
// 1)create new component for new form NewTodoForm.jsx
// 2)in that file we import 
    // import React,{Component} from 'react';
    // import './App.css';
// 3)we add class and export class NewTodoForm(your component name ) extends Component and export default NewTodoForm(component name);
// 4)import component in main App.jsx import NewTodoForm(component name) from './NewTodoForm.jsx'(component file name);
// 5)create own tag from we got html code (your comonent name) how i add in html include(file name).
// 6)same step with all components(todo component)



// =====common steps ====
//1)create object & add data use object in main constructor  this.state = {todos:[ in main app.js file
//2)



// =====steps for remove data=====
// 1)do this steps in remove fun which is in main class  app.js
//var todos = this.state.todos;//we store old list
//     var filtered = todos.filter((todo) => {//we filter particular if
//       return todo.id != id;
//     });
//     this.setState({todos:filtered});//we change the list
// check in console log click app write in console log $r.removeTodo(1) here removeTodo=fun name 1 is id.
//2)call fun(method )in todo list in html in map fun in app.js main file
// removeTodo:this.removeTodo,
// check in console log click app todo check fun
// when we lick o cross icon we want to delete so we have to go NewTodoForm.js file in which icon have 
// create onclick fun (handelTodoRemoveClick)in i tag and call that fun (handelTodoRemoveClick) after constructer 


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
    //data that we want to add
      var newTodo = {
        id:Date.now(),
        ...data
      };

      // console.log(newTodo);
      //  var todos = [todos,...this.state.todos];
      // this.setState({todos});
      var newList = [newTodo,...this.state.todos];//we add new data in list
      this.setState({todos:newList});//change data in main list
  }
  // ====event(method) for delete data===
  removeTodo = (id) =>
  {
    var todos = this.state.todos;//we store old list
    var filtered = todos.filter((todo) => {//we filter particular if
      return todo.id != id;
    });
    this.setState({todos:filtered});//we change the list
    
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
              //console.log(todo);
              var todoProps = {
                ...todo,//... allow to copy list and items
                key:todo.id,
                removeTodo:this.removeTodo,//for delete data
                

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
