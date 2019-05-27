import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import Part1 from '../part1/part1';
import Part2 from '../part2/part2';
import Title from '../title/title';
import Inventory from '../inventory/inventory';

import './partwrap.css';
import arrNext from '../assets/arrnext.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        status:"one",
        statusClass: "title"
      },
      content: <Part1 />,
      arr: arrNext,
      arrStatus: "next",
      maxPartNum: 1,
      showPart: true
    };
    this.stepTo = this.stepTo.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }
  componentDidMount() {
    this.setState({content: <Part1 data={this.state.title} onData={ this.handleTitleChange } />});
  }
  partNum = 0;
  timer = null;
  stepTo() {
    if(this.partNum === this.state.maxPartNum) {
      this.partNum = 0;
    } else {
      this.partNum += 1;
    }

    this.setshow(false);
    if(this.timer !== null) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout( () => {
      switch(this.partNum)
      {
        case 0:
          this.setState({ content: <Part1 data={this.state.title} onData={ this.handleTitleChange } /> })
          this.setState({ arrStatus: "next" });
          break;
        case 1:
          this.setState({ content: <Part2 data={this.state.title} onData={ this.handleTitleChange } /> })
          this.setState({ arrStatus: "prev" })
          break;
        default:
          this.setState({ content: <Part1 data={this.state.title} onData={ this.handleTitleChange } /> })
      }
      this.setshow(true);
    }, 300);
    
  }

  setshow(bool) {
    this.setState({ showPart: bool });
  }

  handleTitleChange(status) {
    this.setState({ title: status });
  }


  render() {
    return (
        <div className="App">
          <div className="arr" onClick={this.stepTo}>
            <img src={this.state.arr} className={this.state.arrStatus} alt=""/>
          </div>
          <CSSTransition
              in={this.state.showPart}
              timeout={300}
              classNames="sw"
              unmountOnExit
            >
              { this.state.content }
          </CSSTransition>
          <Title data={this.state.title} onData={ this.handleTitleChange } />
          <Inventory />
        </div>
    );
  }
}

export default App;
