var React = require('react');
var ReactDOM = require('react-dom');

// create Main-Picture component
var MainPicture = React.createClass({
  render: function () {
    return (
      <div className="main-picture">
        <Button className='prev-btn' currentImg={this.props.currentImg} thumblists={this.props.thumblists} changeCurrentImg={this.props.changeCurrentImg} />
        <img src={this.props.currentImg} alt="no picture" />
        <Description titles={this.props.titles} descriptions={this.props.descriptions} currentImg={this.props.currentImg} thumblists={this.props.thumblists} />
        <Button className='next-btn' currentImg={this.props.currentImg} thumblists={this.props.thumblists} changeCurrentImg={this.props.changeCurrentImg} />
      </div>
    );
  }
});

//create Description component
var Description = React.createClass({
  render: function () {
    var thumblists = this.props.thumblists;
    var currentImg = this.props.currentImg;
    var titles = this.props.titles;
    var descriptions = this.props.descriptions;
    var index = thumblists.indexOf(currentImg);
    return (
      <div className="description-container">
        <span className='title'>{titles[index]}</span>
        <p className='description'>{descriptions[index]}</p>
      </div>
    );
  }
})

// create Thumb-nail component
var ThumbNail = React.createClass({
  render: function () {
    var thumblists = this.props.thumblists;
    thumblists = thumblists.map(function (item, index) {
      if (item === this.props.currentImg) {
        return (
          <ThumbCurrent ThumbCurrent={item} key={index} changeCurrentImg={this.props.changeCurrentImg} />
        );
      } else {
        return (
          <ThumbItem ThumbCurrent={item} key={index} changeCurrentImg={this.props.changeCurrentImg} />
        );
      }
    }.bind(this));
    return (
      <div className="thumb-nail">
        {thumblists}
      </div>
    );
  }
});

// create Thumb-Nail item component
var ThumbItem = React.createClass({
  render: function () {
    return (
      <div onMouseOver={this.handleMouseOver}>
        <img src={this.props.ThumbCurrent} alt="" onClick={this.handleClick} className="active" />
      </div>
    );
  },
  handleClick: function () {
    this.props.changeCurrentImg(this.props.ThumbCurrent);
  },
  handleMouseOver: function () {
    console.log(1);
  }
});

// create Thumb-Current component
var ThumbCurrent = React.createClass({
  render: function () {
    return (
      <div>
        <img src={this.props.ThumbCurrent} alt="" onClick={this.handleClick} className="active" />
        <span></span>
      </div>
    );
  },
  handleClick: function () {
    this.props.changeCurrentImg(this.props.ThumbCurrent);
  }
});

// create Button component
var Button = React.createClass({
  render: function () {
    return (
      <button className={this.props.className} onClick={this.handleClick} ></button>
    );
  },
  handleClick: function () {
    var thumblists = this.props.thumblists;
    var currentImg = this.props.currentImg;
    var index = thumblists.indexOf(currentImg);
    if (this.props.className === 'next-btn') {
      if (index === thumblists.length - 1) {
        index = 0;
      } else {
        index++;
      }
    } else {
      if (index === 0) {
        index = thumblists.length - 1;
      } else {
        index--;
      }
    }
    this.props.changeCurrentImg(thumblists[index]);
  }
});

// create Search component
var Search = React.createClass({
  render: function () {
    return (
      <div className="search-container">
        <input type="text" placeholder='input title' className='search-text' onKeyDown={this.handleKeyDown}/>
        <button className="search" onClick={this.handleClick}>Search</button>
      </div>
    );
  },  
  handleClick: function () {
    var titleForSearch = document.getElementsByClassName('search-text')[0].value;
    var titles = this.props.titles;
    var index = titles.indexOf(titleForSearch);
    this.props.changeCurrentImg(this.props.thumblists[index]);
  },
  handleKeyDown: function (event) {
    var key = event.keyCode;
    if (key == '13') {
      this.handleClick();
    }
  }
});

//create Gallery component
var Gallery = React.createClass({
  getInitialState: function () {
    return {
      currentImg: '../imgs/01.jpg',
      thumblists: [
        '../imgs/01.jpg',
        '../imgs/02.jpg',
        '../imgs/03.jpg',
        '../imgs/04.jpg',
        '../imgs/05.jpg',
        '../imgs/06.jpg'
      ],
      titles: [
        'title1',
        'title2',
        'title3',
        'title4',
        'title5',
        'title6',
      ],
      descriptions: [
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        `Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
        "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.`,
        `Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`,
        `"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.`,
        `Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.`,
        `Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.`
      ]
    }
  },
  render: function () {
    return (
      <main>
        <Search titles={this.state.titles} changeCurrentImg={this.changeCurrentImg} thumblists={this.state.thumblists}/>
        <MainPicture currentImg={this.state.currentImg} titles={this.state.titles} descriptions={this.state.descriptions} thumblists={this.state.thumblists} changeCurrentImg={this.changeCurrentImg} />
        <ThumbNail thumblists={this.state.thumblists} changeCurrentImg={this.changeCurrentImg} currentImg={this.state.currentImg} />
      </main>
    );
  },
  changeCurrentImg: function (newImgSrc) {
    this.setState({
      currentImg: newImgSrc
    });
  }
});

ReactDOM.render(
  <Gallery/>,
  document.getElementsByClassName('gallery')[0]
);