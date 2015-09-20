var eggmsg = require('../index.js')();

var myid = 1;

eggmsg.add(1);
eggmsg.add(2);

eggmsg.send(2, "Hi There", function(id, data) {
	console.log("User "+ id +" Says:", data);
	eggmsg.send(1, "Hello Back", function(id, data) {
		if (id === myid) {
			console.log("User "+ id +" Sees:", data);
		}
	});
});
