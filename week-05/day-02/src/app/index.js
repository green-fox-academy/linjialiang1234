var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = React.createClass({
  render:function(){
    return (
        <h1>Ninjia</h1>
    );
  }
});
//put component into html page
ReactDOM.render(<TodoComponent/>,document.getElementById("todo-wrapper"))