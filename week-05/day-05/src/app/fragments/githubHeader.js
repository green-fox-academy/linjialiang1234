var React = require('react');
require('../scss/header.scss');

class GithubHeader extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <div>
          <ul>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">MDN</a></li>
            <li><a href="#">Stack Overflow</a></li>
          </ul>
        </div>
      </nav>

    );
  }
};

module.exports = GithubHeader;