import React from 'react';
import ReactDOM from 'react-dom';
import SlackTimeline from './components/slack-timeline';
import config from '../../config.json';

ReactDOM.render(
  <SlackTimeline />,
  document.getElementById('root')
);

const socket = io.connect(`localhost:${config.PORT}`);
socket.on('news', (data) => {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
console.log(socket);
