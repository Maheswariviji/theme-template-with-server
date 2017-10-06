const mongoose = require('mongoose');
var chatSchema = mongoose.Schema({
fromUserId:{type:String},
toUserId:{type:String},
fromUserName:{type:String},
toUserName:{type:String},
message:{type:String},
date:{type:String} //send date not viewed dat in offline
});
module.exports = mongoose.model('Chat', chatSchema);