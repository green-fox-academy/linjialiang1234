var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = React.createClass({
  getInitialState:function(){
    return {
      todos: ['wash up','eat some cheese', 'take a nap'],
      age:30
    }
  },
  render:function(){
    return (
        <div id="todo-list">
          <p>The busiest people have the most leisure...</p>
          <ul>
            <li>{this.state.todos[0]}</li>
            <li>{this.state.todos[1]}</li>
            <li>{this.state.todos[2]}</li>
          </ul>
          {/* <ListComponent todos={this.state.todos} /> */} 
        </div>
    );
  }
});

//put component into html page
ReactDOM.render(<TodoComponent />,document.getElementById("todo-wrapper"))