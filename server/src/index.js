import 'json5';
import config from '../../config';
import Slack from './slack';
import express from 'express';
import socketIo from 'socket.io';
import http from 'http';
import path from 'path';

const app = express();
app.use('/static', express.static('client'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

const server = http.Server(app);
server.listen(config.PORT, () => {
  console.log(`Listening on ${config.PORT}.`);
});

const io = socketIo(server);
io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', (data) => {
    console.log(data);
  });
});

const onError = (err) => {
  console.log(err);
}

const slack = new Slack(config.slack_token);

let times_messages = [];
let times_channels = [];

const requestMessages = (_channels = []) => {
  return _channels.map((_channel) => {
    return new Promise((resolve) => {
      slack._apiRequest('channels.history', {
        channel: _channel.id,
      }).then(({messages}) => {
        resolve(messages);
      });
    });
  });
};

const fetchMessages = () => {
  slack._apiRequest('channels.list').then(({channels}) => {
    times_channels = channels.filter(({name}) => {
      return (name.indexOf('times_') >= 0);
    });
    Promise.all(requestMessages(times_channels)).then((values) => {
      console.log(values);
    });
  }).catch(onError);
};
