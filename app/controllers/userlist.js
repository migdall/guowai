var azure = require('azure-storage');
var async = require('async');

module.exports = UserList;

function UserList(user) {
  this.user = user;
}

UserList.prototype = {

  addUser: function(req,res) {
    var self = this;
    var item = {
        username: "real",
        password: "world hawaii"
    };
    self.user.addItem(item, function itemAdded(error) {
      if(error) {
        throw error;
      }
      res.redirect('/');
    });
  },
  findOne: function(data, res) {
      console.log(data);
      console.log(res);
      res();
  }
}
