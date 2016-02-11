import React from 'react';

const leftBoxStyle = {
  order: 1,
  width: '300px',
  height: '600px',
  backgroundColor: 'red',
};

class LeftBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="left-box" style={leftBoxStyle}>
        left
      </div>
    );
  }
}

export default LeftBox;
