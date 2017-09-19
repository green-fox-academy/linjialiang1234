var React = require('react');
var ReactDOM = require('react-dom');
var App = React.createClass({
  render:function() {
    return (
      <div>
      <Viewer/>
      <ThumbnailComponent/>
      </div>
    );
  }
})
var Viewer = React.createClass({
  render:function(){
    return (
    <div className="viewer">
      <LeftArrow/>
      <MainImage/>
      <RightArrow/>
    </div>
    )
  }
})

var LeftArrow = React.createClass({
  render:function(){
    return(
      <div className="leftarrow">
       <a onClick="plusSlides(-1)"><img className="leftArrowImage" src="leftarrow.svg" /></a>
    </div>

    );
  }




});
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
      var imagesArray = this.state.imageInformation;
      imagesArray = imagesArray.map(function(item,index) {
        return (
          <div className="images">
          <SingleImage item={item} key={index}/>
          </div>
        );
      }.bind(this));
      return (
        <div>
          {imagesArray}
        </div>
      )
    }
 
});

var SingleImage = React.createClass({
  render:function() {
    return (
      // <div id="images">
        <div className="imageSingle">
          <div className="photo">
           <img src= {this.props.item.imageSrc}/>
          </div>
          <div className="description">
             <h3>{this.props.item.title}</h3>
             <p>{this.props.item.description}</p>
          </div>
        </div>
          
    );
  }
})

var RightArrow = React.createClass({
  render:function(){
    return (

      <div className="rightarrow">
      <a onClick={this.plusSlides}><img className="rightArrowImage" src="leftarrow.svg"/>></a>
    </div>
    )
  },

  plusSlide: function() {
    var updateImages = this.state.imageInformation
    var changeIndexArray = []
    for(var i = 0; i < updateImages.length; i++) {
      updateImages[i] = updateImages[i+1];
      changeIndexArray.push(updateImages[i]);
    }
    this.setState({
      imageInformation : changeIndexArray
    });
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
        <a className="dot" onClick="currentSlide(1)"><span className="tooltiptext">Cat</span><img src={this.state.imageInformation[0].imageSrc}/>></a>
        <a className="dot" onClick="currentSlide(2)"><span className="tooltiptext">Goat</span><img src={this.state.imageInformation[1].imageSrc}/>></a>
        <a className="dot" onClick="currentSlide(3)"><span className="tooltiptext">Lion</span><img src={this.state.imageInformation[2].imageSrc}/>></a>
        <a className="dot" onClick="currentSlide(4)"><span className="tooltiptext">Mouse</span><img src={this.state.imageInformation[3].imageSrc}/></a>
        <a className="dot" onClick="currentSlide(5)"><span className="tooltiptext">Squiral</span><img src={this.state.imageInformation[4].imageSrc}/></a>
      </div>
    );
  }

});

ReactDOM.render(<App />,document.getElementById("bodyContainer"));
