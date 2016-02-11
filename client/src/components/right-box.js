import React from 'react';

const rightBoxStyle = {
  order: 3,
  width: '300px',
  height: '600px',
  backgroundColor: 'yellow',
};

class RightBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="right-box" style={rightBoxStyle}>
        right
      </div>
    );
  }
}

export default RightBox;
