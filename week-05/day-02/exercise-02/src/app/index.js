var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render:function(){
    return (
    <div>
      <MainImage/>
      <ThumbnailComponent/>

    </div>
    )
  }
})
var MainImage = React.createClass({
  getInitialState:function() {
    return {
      imageInformation:[ { "title":"I love cat!", 
                          "description": "I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!!I love it very much. Good!!!",
                          "imageSrc": "01.jpg"},

                          { "title":"I love goat!", 
                          "description": "I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!!I love it very much. Good!!!",
                          "imageSrc": "02.jpg"},

                          { "title":"I love lion!", 
                          "description": "I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!!I love it very much. Good!!!",
                          "imageSrc": "03.jpg"},

                          { "title":"I love mouse!", 
                          "description": "I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!!I love it very much. Good!!!",
                          "imageSrc": "04.jpg"},

                          { "title":"I love squiral!", 
                          "description": "I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!!I love it very much. Good!!!",
                          "imageSrc": "05.jpg"}
      ]
    }
  },
 
  render:function(){
      return (
        <div id="images">
        <div className="imageSingle">
          <div className="photo">
          <img src= {this.state.imageInformation[0].imageSrc}/>
          </div>
          <div className="description">
            <h3>{this.state.imageInformation[0].title}</h3>
            <p>{this.state.imageInformation[0].description}</p>
          </div>
        </div>
        </div>
      )
    }
 
});

var ThumbnailComponent = React.createClass({
  getInitialState:function() {
    return {
      imageInformation:[ { "title":"I love cat!", 
                          "description": "I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!!I love it very much. Good!!!",
                          "imageSrc": "01.jpg"},

                          { "title":"I love goat!", 
                          "description": "I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!!I love it very much. Good!!!",
                          "imageSrc": "02.jpg"},

                          { "title":"I love lion!", 
                          "description": "I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!!I love it very much. Good!!!",
                          "imageSrc": "03.jpg"},

                          { "title":"I love mouse!", 
                          "description": "I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!!I love it very much. Good!!!",
                          "imageSrc": "04.jpg"},

                          { "title":"I love squiral!", 
                          "description": "I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!!I love it very much. Good!!!",
                          "imageSrc": "05.jpg"}
      ]
    }
  },
 
  render:function() {
    return (
      <div className="thumbnails">
        <a className="dot"><span className="tooltiptext">Cat</span><img src={this.state.imageInformation[0].imageSrc}/>></a>
        <a className="dot"><span className="tooltiptext">Goat</span><img src={this.state.imageInformation[1].imageSrc}/>></a>
        <a className="dot"><span className="tooltiptext">Lion</span><img src={this.state.imageInformation[2].imageSrc}/>></a>
        <a className="dot"><span className="tooltiptext">Mouse</span><img src={this.state.imageInformation[3].imageSrc}/></a>
        <a className="dot"><span className="tooltiptext">Squiral</span><img src={this.state.imageInformation[4].imageSrc}/></a>
      </div>
    );
  }

});

ReactDOM.render(<App />,document.getElementById("bodyContainer"));
// ReactDOM.render(<ThumbnailComponent />,document.getElementsByClassName("thumbnailsContainer"));