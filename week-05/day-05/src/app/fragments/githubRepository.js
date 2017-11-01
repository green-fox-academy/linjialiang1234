var React = require('react');

require("../scss/repository.scss");

class GithunRepository extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var liItems = this.props.commits.map(function(value, index) {
      return(
        <li>
          <p className="commitMessage" > {value.commit.message}</p>
          <p className="commitUpdateTime" >{value.commit.committer.name} at 
            {value.commit.committer.data}</p>
        </li>
      );
    });

    return (
      <div className = "repository">
        <div>
          <h1 className="repHeading">{this.props.title}</h1>
          <p className="reposDescription">{this.props.description}</p>
          <p className="reposUpdatedTime">Last updated at {this.props.updateTime}</p>
        </div>

        <div>
          <div className="repHeading commitHeading">
            <h1>Commits</h1>
            <p>({this.props.commitsTotal})</p>
          </div>

          <ul>{liItems}</ul>

        </div>

      </div>
    );
  }
}

module.exports = GithunRepository;