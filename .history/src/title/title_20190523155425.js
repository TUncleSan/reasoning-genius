import React from 'react';

import './title.css';

import dialogContext from juben;

class Title extends React.Component {
  constructor(props) {
    super(props);
    let vcn = "title hide";
    if(props.data) {
      vcn = "title";
    }
    this.state = {
      topicNum: 0,
      word: dialogContext.part1.one[0],
      vclassName: vcn
    }
    this.nextTopic = this.nextTopic.bind(this);
  }
  nextTopic (num) {
    if(this.state.topicNum === 7) {
      this.setState({
        vclassName: "title hide"
      })
      return;
    }
    this.setState({
      vclassName: "title hide",
      topicNum: num + 1,
      word: dialogContext.part1.one[num + 1]
    });
  }

  render() {
    return (
      <div>
        <div className={ this.state.vclassName } onClick={ () => this.nextTopic(this.state.topicNum) }>
          <div className="title-content-wrap">
            { this.state.word }
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
