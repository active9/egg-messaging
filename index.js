var eggmessaging = function () {
  var self = this;
  var ids = [];

  self.add = function(id) {
  	ids.push(id);
  }

  self.remove = function(id) {
  	ids.pop(id);
  }

  self.send = function(id, data, cb) {
    self.dispatch(id, data, cb);
  };

  self.recv = function(id, data, cb) {
  	self.dispatch(id, data, cb);
  };

  self.dispatch = function(id, data, cb) {
  	cb(id, data);
  };

  return self;
}

module.exports = eggmessaging;
