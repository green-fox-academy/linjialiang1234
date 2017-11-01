var React = require('react');
var GithubSearchbar = require('./githubSearchbar');
var GithubRepository = require('./githubRepository');
var GithubAuthenticate = require('./githubAuthenticate')
var GithubRecommended = require('./githubRecommended');

var LocalStorage = window.localStorage;

require('../scss/content.scss');

class GithubContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recommends:[{
          "id": 101280439,
          "name": "ZhengnanZhang",
          "score": 8.611711
      },{
          "id": 10128042239,
          "name": "akjsdhsakjdhaskjsdh",
          "score": 8.611711
      }],
      tittle: "TEACHING-MATERIALS",
      description: "Central repository of Green Fox Academy's syllabus modules",
      updateTime: "2017-09-14T10:30:51Z",
      commitsTotal: 2017,
      commits:[{
          "sha": "62f49517a47c59397db4f5bd80fb090f21a603b9",
          "commit": {
              "author": {
                  "name": "Jessie Cai",
                  "email": "\u0096tsai19930224@gmail.com",
                  "date": "2017-09-21T10:23:50Z"
              },
              "committer": {
                  "name": "Jessie Cai",
                  "email": "\u0096tsai19930224@gmail.com",
                  "date": "2017-09-21T10:23:50Z"
              },
              "message": "Exercises for week4day4",
              "tree": {
                  "sha": "e00976552d3f40ac67c6359fb9c8db735d373993",
                  "url": "https://api.github.com/repos/greenfox-academy/ttttsai/git/trees/e00976552d3f40ac67c6359fb9c8db735d373993"
              },
              "url": "https://api.github.com/repos/greenfox-academy/ttttsai/git/commits/62f49517a47c59397db4f5bd80fb090f21a603b9",
              "comment_count": 0
          }
      },{
          "sha": "62f49517a47c59397db4f5bd80fb090f21a603b9",
          "commit": {
              "author": {
                  "name": "Jessie Cai",
                  "email": "\u0096tsai19930224@gmail.com",
                  "date": "2017-09-21T10:23:50Z"
              },
              "committer": {
                  "name": "Jessie Cai",
                  "email": "\u0096tsai19930224@gmail.com",
                  "date": "2017-09-21T10:23:50Z"
              },
              "message": "Exercises for week4day4",
              "tree": {
                  "sha": "e00976552d3f40ac67c6359fb9c8db735d373993",
                  "url": "https://api.github.com/repos/greenfox-academy/ttttsai/git/trees/e00976552d3f40ac67c6359fb9c8db735d373993"
              },
              "url": "https://api.github.com/repos/greenfox-academy/ttttsai/git/commits/62f49517a47c59397db4f5bd80fb090f21a603b9",
              "comment_count": 0
          }
      },{
          "sha": "62f49517a47c59397db4f5bd80fb090f21a603b9",
          "commit": {
              "author": {
                  "name": "Jessie Cai",
                  "email": "\u0096tsai19930224@gmail.com",
                  "date": "2017-09-21T10:23:50Z"
              },
              "committer": {
                  "name": "Jessie Cai",
                  "email": "\u0096tsai19930224@gmail.com",
                  "date": "2017-09-21T10:23:50Z"
              },
              "message": "Exercises for week4day4",
              "tree": {
                  "sha": "e00976552d3f40ac67c6359fb9c8db735d373993",
                  "url": "https://api.github.com/repos/greenfox-academy/ttttsai/git/trees/e00976552d3f40ac67c6359fb9c8db735d373993"
              },
              "url": "https://api.github.com/repos/greenfox-academy/ttttsai/git/commits/62f49517a47c59397db4f5bd80fb090f21a603b9",
              "comment_count": 0
          }
      },{
          "sha": "62f49517a47c59397db4f5bd80fb090f21a603b9",
          "commit": {
              "author": {
                  "name": "Jessie Cai",
                  "email": "\u0096tsai19930224@gmail.com",
                  "date": "2017-09-21T10:23:50Z"
              },
              "committer": {
                  "name": "Jessie Cai",
                  "email": "\u0096tsai19930224@gmail.com",
                  "date": "2017-09-21T10:23:50Z"
              },
              "message": "Exercises for week4day4",
              "tree": {
                  "sha": "e00976552d3f40ac67c6359fb9c8db735d373993",
                  "url": "https://api.github.com/repos/greenfox-academy/ttttsai/git/trees/e00976552d3f40ac67c6359fb9c8db735d373993"
              },
              "url": "https://api.github.com/repos/greenfox-academy/ttttsai/git/commits/62f49517a47c59397db4f5bd80fb090f21a603b9",
              "comment_count": 0
          }
      },{
          "sha": "62f49517a47c59397db4f5bd80fb090f21a603b9",
          "commit": {
              "author": {
                  "name": "Jessie Cai",
                  "email": "\u0096tsai19930224@gmail.com",
                  "date": "2017-09-21T10:23:50Z"
              },
              "committer": {
                  "name": "Jessie Cai",
                  "email": "\u0096tsai19930224@gmail.com",
                  "date": "2017-09-21T10:23:50Z"
              },
              "message": "Exercises for week4day4",
              "tree": {
                  "sha": "e00976552d3f40ac67c6359fb9c8db735d373993",
                  "url": "https://api.github.com/repos/greenfox-academy/ttttsai/git/trees/e00976552d3f40ac67c6359fb9c8db735d373993"
              },
              "url": "https://api.github.com/repos/greenfox-academy/ttttsai/git/commits/62f49517a47c59397db4f5bd80fb090f21a603b9",
              "comment_count": 0
          }
      },{
          "sha": "62f49517a47c59397db4f5bd80fb090f21a603b9",
          "commit": {
              "author": {
                  "name": "Jessie Cai",
                  "email": "\u0096tsai19930224@gmail.com",
                  "date": "2017-09-21T10:23:50Z"
              },
              "committer": {
                  "name": "Jessie Cai",
                  "email": "\u0096tsai19930224@gmail.com",
                  "date": "2017-09-21T10:23:50Z"
              },
              "message": "Exercises for week4day4",
              "tree": {
                  "sha": "e00976552d3f40ac67c6359fb9c8db735d373993",
                  "url": "https://api.github.com/repos/greenfox-academy/ttttsai/git/trees/e00976552d3f40ac67c6359fb9c8db735d373993"
              },
              "url": "https://api.github.com/repos/greenfox-academy/ttttsai/git/commits/62f49517a47c59397db4f5bd80fb090f21a603b9",
              "comment_count": 0
          }
      },{
          "sha": "62f49517a47c59397db4f5bd80fb090f21a603b9",
          "commit": {
              "author": {
                  "name": "Jessie Cai",
                  "email": "\u0096tsai19930224@gmail.com",
                  "date": "2017-09-21T10:23:50Z"
              },
              "committer": {
                  "name": "Jessie Cai",
                  "email": "\u0096tsai19930224@gmail.com",
                  "date": "2017-09-21T10:23:50Z"
              },
              "message": "Exercises for week4day4",
              "tree": {
                  "sha": "e00976552d3f40ac67c6359fb9c8db735d373993",
                  "url": "https://api.github.com/repos/greenfox-academy/ttttsai/git/trees/e00976552d3f40ac67c6359fb9c8db735d373993"
              },
              "url": "https://api.github.com/repos/greenfox-academy/ttttsai/git/commits/62f49517a47c59397db4f5bd80fb090f21a603b9",
              "comment_count": 0
          }
      },{
          "sha": "62f49517a47c59397db4f5bd80fb090f21a603b9",
          "commit": {
              "author": {
                  "name": "Jessie Cai",
                  "email": "\u0096tsai19930224@gmail.com",
                  "date": "2017-09-21T10:23:50Z"
              },
              "committer": {
                  "name": "Jessie Cai",
                  "email": "\u0096tsai19930224@gmail.com",
                  "date": "2017-09-21T10:23:50Z"
              },
              "message": "Exercises for week4day4",
              "tree": {
                  "sha": "e00976552d3f40ac67c6359fb9c8db735d373993",
                  "url": "https://api.github.com/repos/greenfox-academy/ttttsai/git/trees/e00976552d3f40ac67c6359fb9c8db735d373993"
              },
              "url": "https://api.github.com/repos/greenfox-academy/ttttsai/git/commits/62f49517a47c59397db4f5bd80fb090f21a603b9",
              "comment_count": 0
          }
      }]
    };
  }

  handleSearchData (data) {
    //????
    var that = this;
    this.setState( {
      "title" : data.name,
      "description" : data.description,
      "updateTime" : data.update_at
    });

    var url = 'https://api.github.com/repos/greenfox-academy/' + data.name + "/commits";
    
    var authValue = LocalStorage.getItem("Authorization");
    var myHeaders = new Headers();
    //?????
    var that = this;

    if(authValue && authValue.length > 0) {
      myHeaders.append("Authorization", authValue);

    }

    var myInit = {
      method: 'GET',
      headers: myHeaders
    };

    fetch(url, myInit).then(function(response) {
      return response.json();
    }).then(function(value) {
      that.handleCommitData(value);
      console.log(value);
      return value;
    });
  }

  handleCommitData(data) {
    this.setState({
      commitsTotal: data.length,
      commits: data.slice(0,5)
    });
  }

  render() {
    return(
      <main>
        {/* //???????????? */}
        <GithubSearchbar handleData = {this.handleSearchData.bind(this)}/>
        <div className="mainAndAside">
          <GithubRepository titile = {this.state.tittle}
          description = {this.state.description}
          updateTime = {this.state.updateTime}
          commitsTotal = {this.state.commitsTotal}
          commits = {this.state.commits}/>

          <aside>
            <GithubAuthenticate/>
            <GithubRecommended recommends = {this.state.recommends}
             handleData = {this.handleSearchData.bind(this)}/>
          </aside>

        </div>
      </main>

    );
  }

 
};

module.exports = GithubContent;



