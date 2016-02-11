import { default as SlackNode } from 'slack-node';

/**
 * Slack Class for REST API
 */
class SlackClient {
  constructor(apiToken) {
    this._slackNode = new SlackNode(apiToken);
  }

  fetch(type) {
    return this[type]();
  }

  users() {
    const apiName = 'users.list';
    return new Promise((resolve, reject) => {
      this._slackNode.api(apiName, (err, res) => {
        if (err) {
          reject(err);
        }

        if (res.ok) {
          resolve(res.members);
        } else {
          reject(err);
        }
      });
    });
  }

  messages() {
    const apiName = 'users.list';
    return new Promise((resolve, reject) => {
      this._slackNode.api(apiName, (err, res) => {
        if (err) {
          reject(err);
        }

        if (res.ok) {
          resolve(res.members);
        } else {
          reject(err);
        }
      });
    });
  }

  _apiRequest(apiName, params = {}) {
    return new Promise((resolve, reject) => {
      this._slackNode.api(apiName, params, (err, res) => {
        if (err) {
          reject(err);
        }

        if (res.ok) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  }
}

export default SlackClient;
