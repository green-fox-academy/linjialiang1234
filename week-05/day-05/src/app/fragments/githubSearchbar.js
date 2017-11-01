var React = require('react');
require('../scss/searchbar.scss');

var LocalStorage = window.localStorage;

class GithunSearchbar extends React.Component {
  constructor(props) {
    super(props);
  }

  onSearchRepository() {
    var resInput = this.refs.reposName.value;
    var authValue = LocalStorage.getItem("Authorization");
    var myHeaders = new Headers();

    //?????????????
    var that = this;

    if(authValue && authValue.length > 0) {
      myHeaders.append("Authorization", authValue);
    }

    var myInit = {
      method: 'GET',
      headers: myHeaders
    };

    fetch('https://api.github.com/repos/greenfox-academy/' + resInput, myInit).then(function(response){
      if(response.status === 200) {
        console.log(response);
      } else if (response.status === 404) {
        alert("Repository not found");
        throw new Error("Repository not found");
      }

      return response.json();
    }).then(function(value) {
      that.props.handleData(value);
      //////???????????????
      return value;
    }).catch(function(err) {
      console.log(err);
    });
  }
  render() {
    return (
      <div className = "searchBar">
        <span>greenfox-academy</span>
        <input placeholder="repository name" ref="reposName"></input>

        {/* ?????????? */}
        <button onClick={this.onSearchRepository.bind(this)}>Go</button>
      </div>
    );

  }

  };
 
module.exports = GithunSearchbar;