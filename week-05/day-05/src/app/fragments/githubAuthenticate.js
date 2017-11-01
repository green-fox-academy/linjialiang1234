'use strict';
var React = require('react');
require('../scss/authenticate.scss');

var LocalStorage = window.localStorage;

class GithubAuthenticate extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickAuth(e) {
    var userName = this.refs.userName.value  || "ttttsai"//this.refs.userName.value;
    var token = this.refs.token.value || "cf83bd421fa7c95b257b0d0ff91ac070e08737f7";//this.refs.token.value;
 
    var authValue = "Basic " + btoa(userName + ":" + token);

    var myHeaders = new Headers();
    myHeaders.append("Authorization",authValue);
    var myInit = {
      method: "GET",
      headers: myHeaders
    };

    fetch('https://api.github.com/rate_limit', myInit).then(function(response){

      if(response.status === 200) {
        LocalStorage.setItem("Authorization", authValue);
      } else if (response.status === 401) {
        alert("Token or user is not correct");
        throw new Error("Token or user is not correct");
      }
      return response.json();
  }).catch(function(err) {
    console.log(err);
  });
  }
  render(){
    return (
      <div className = "authenticate">
        <p>Authenticate</p>
        <input placeholder="Username" ref="userName"></input>
        <input placeholder="Token or password" ref="token"></input>
        <button onClick={this.onClickAuth.bind(this)}>Login</button>
      </div>

    )
  }
};

module.exports = GithubAuthenticate;