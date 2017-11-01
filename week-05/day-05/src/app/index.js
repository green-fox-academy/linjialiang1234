var React = require('react');
var ReactDOM = require('react-dom');
var GithubHeader = require('./fragments/githubHeader');
var GithubContent = require('./fragments/githubContent');

class GithubPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <GithubHeader />
        <GithubContent />
      </div>
    );
  }
}

ReactDOM.render(<GithubPage />, document.querySelector(".center"));