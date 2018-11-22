// Description:
//   This script deletes join and leave messages comming from the matrix
//   bridge.

var fs = require('fs');

module.exports = function (robot) {

  robot.hear(/[<>] .* has (joined|left) the room/i, function (res) {

    robot.emit('telegram:invoke', 'deleteMessage', {
      chat_id: res.message.room,
      message_id: res.message.id
    }, function (error, response) {
      console.log(error);
      console.log(response);
    });
  });
};
