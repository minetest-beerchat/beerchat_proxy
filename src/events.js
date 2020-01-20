
/*
Events:


## "message-in" / "message-out"

{
  // source messaging system
  // "irc", "discord", "minetest", etc
  type: "irc",

  // the name of the remote system
  name: "freenode",

  // the source username
  username: "SomeDude",

  // the ingame channel: "main", "lag", etc
  channel: "main",

  //the actual message
  message: "xyz",
}


*/

const EventEmitter = require("events");
module.exports = new EventEmitter();
