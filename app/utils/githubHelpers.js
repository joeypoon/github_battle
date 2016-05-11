var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var secret = "YOUR_SECRET_KEY";
var params = "?client_id=" + id + "&client_secret=" + secret;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + params)
};

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username)
    })).then(function(info) {
      return info.map(function(user) {
        return user.data;
      })
    }).catch(function(error) {
      console.warn("Error in player info", error);
    })
  }
};

module.exports = helpers;
