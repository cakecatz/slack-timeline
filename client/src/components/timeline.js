import React from 'react';

const timelineStyle = {
  order: 2,
  width: '600px',
};

class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="timeline" style={timelineStyle}>
        Hello
      </div>
    );
  }
}

export default Timeline;
