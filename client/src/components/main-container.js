import React from 'react';
import Timeline from './timeline';
import LeftBox from './left-box';
import RightBox from './right-box';

const mainContainerStyle = {
  margin: '0 100px',
  padding: '100px 0',
  minWidth: '900px',
  display: 'flex',
  flexWrap: 'wrap',
};

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container" style={mainContainerStyle}>
        <LeftBox />
        <Timeline />
        <RightBox />
      </div>
    );
  }
}

export default MainContainer;
