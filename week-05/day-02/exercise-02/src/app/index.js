var React = require('react');
var ReactDOM = require('react-dom');
var App = React.createClass({

  getInitialState:function() {
    return {
      currentImg : "01.jpg",

      imageSrc: ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"],

      title:["I love cat!", "I love goat!","I love lion!","I love mouse!","I love squiral!"],

      description:["I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!!I love it very much. Good!!!",
      "I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!!I love it very much. Good!!!",
      "I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!!I love it very much. Good!!!",
      "I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!!I love it very much. Good!!!",
      "I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!! I love it very much. Good!!!I love it very much. Good!!!"
      ]
    }
  },

  render:function() {
    return (
      <div>
      <Search title={this.state.title} changeCurrentImg={this.changeCurrentImg} imageSrc={this.state.imageSrc}/>
      <Viewer currentImg = {this.state.currentImg} description = {this.state.description} imageSrc={this.state.imageSrc} title={this.state.title}  changeCurrentImg={this.changeCurrentImg}/>
      <ThumbnailComponent/>
      </div>
    );
  },
  changeCurrentImg: function (newImgSrc) {
    this.setState({
      currentImg: newImgSrc
    });
  }
})

var Search = React.createClass({
  render: function() {
    return (
      <div className="search">
        <input type="text" placeholder="Input the Image Name" className="search-text" onClick={this.handleSeach}/>
        <button className ="search" onClick={this.handleClick}>Search</button>
      </div>
    )
  },
    handleClick: function() {
      var textSearch = document.getElementsByClassName("search-text")[0].value;
      var title = this.props.title;
      var index = title.indexOf(textSearch);
      this.props.changeCurrentImg(this.props.imageSrc[index]);
    }
});
var Viewer = React.createClass({
  render:function(){
    return (
    <div className="viewer">
      <LeftArrow currentImg={this.props.currentImg} imageSrc={this.props.imageSrc} changeCurrentImg={this.props.changeCurrentImg}/>
      <MainImage currentImg={this.props.currentImg} imageSrc={this.props.imageSrc} title={this.props.title} description={this.props.description}/>
      <RightArrow currentImg={this.props.currentImg} imageSrc={this.props.imageSrc} changeCurrentImg={this.props.changeCurrentImg}/> 
    </div>
    )
  }
})

var LeftArrow = React.createClass({
  render:function(){
    return(
      <div className="leftarrow">
       <a onClick={this.pressButton}><img className="leftArrowImage" src="leftarrow.svg" /></a>
    </div>
    );
  },
  pressButton:function(){
    var imageSrc = this.props.imageSrc;
    var currentImg = this.props.currentImg;
    var index = imageSrc.indexOf(currentImg);
    if(index === imageSrc.length - 1) {
      index = 0;
    } else {
      index++
    }
    this.props.changeCurrentImg(imageSrc[index]);
  }




});
var MainImage = React.createClass({
  
 
  render:function(){
    var imageSrc = this.props.imageSrc;
    var currentImg = this.props.currentImg;
    var title = this.props.title;
    var description = this.props.description;
    var index = imageSrc.indexOf(currentImg);
    return (
      <div className="imageSingle">
      <div className="photo">
       <img src= {currentImg}/>
      </div>
      <div className="description">
         <h3>{title[index]}</h3>
         <p>{description[index]}</p>
      </div>
    </div>


    )
    }
 
});

// var SingleImage = React.createClass({
//   render:function() {
//     return (
//       // <div id="images">
//         <div className="imageSingle">
//           <div className="photo">
//            <img src= {this.props.item.imageSrc}/>
//           </div>
//           <div className="description">
//              <h3>{this.props.item.title}</h3>
//              <p>{this.props.item.description}</p>
//           </div>
//         </div>
          
//     );
//   }
// })

var RightArrow = React.createClass({
  render:function(){
    return (

      <div className="rightarrow">
      <a onClick={this.pressButton}><img className="rightArrowImage" src="leftarrow.svg"/>></a>
    </div>
    )
  },

  pressButton:function(){
    var imageSrc = this.props.imageSrc;
    var currentImg = this.props.currentImg;
    var index = imageSrc.indexOf(currentImg);
    if(index === 0) {
      index = imageSrc.length - 1;
    } else {
      index--
    }

    this.props.changeCurrentImg(imageSrc[index]);
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
