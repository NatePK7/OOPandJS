// Higher order fxn is a fxn that accepts a callback as a parameter

function sendMessageConsole(message) {
  console.log(message);
}

function sendMessageAlert(message) {
  alert(message);
}

function sendMessageConfirm(message) {
  return confirm(message);
}

sendMessageAlert("Lots of duplication");

// refactored

function sendMessage(message, callback) {
  return callback(message);
}


sendMessage("Message for console", console.log);

sendMessage("Message for alert", alert);

var answer = sendMessage("Are you sure??", confirm);



function sendMessage(message, callback) {
  return callback(message);
}

sendMessage("Message for console", console.log);

sendMessage("Message for alert", alert);

var answer = sendMessage("Are you sure??", confirm);

