var React = require('react');

require('../scss/recommended.scss');

var LocalStorage = window.localStorage;

class GithubRecommended extends React.Component{
    constructor(props){
        super(props);
    }
    onClick(e){
        var inputFiled = document.querySelector('.searchBar>input');
        var buttonFiled = document.querySelector('.searchBar>button');
        inputFiled.value = e.target.innerText;
        buttonFiled.click();
    }
    render(){
        var that = this;
        var recommends = this.props.recommends.map(function(value, index){
            return (
            <li>
                <a href="#" onClick={that.onClick.bind(this)} handleData={that.props.handleData}>{value.name}</a>
            </li>
            );
        });
        return (
            <div className="recommended">
                <p>Recommended</p>
                <ul>{recommends}</ul>
           </div>
        );
    }
};

module.exports = GithubRecommended;