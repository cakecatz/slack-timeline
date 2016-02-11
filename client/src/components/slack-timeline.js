import React from 'react';
import Header from './header';
import MainContainer from './main-container';

class SlackTimeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="slack-timeline">
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default SlackTimeline;
