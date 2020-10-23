const handler = require('./Handler/handler');


module.exports = function(server){
	return server.route([
	
	{method : 'GET', path: '/', handler: handler.home},

	{method : 'GET', path: '/addRecords', handler: handler.addRecords},

	{method : 'GET', path: '/indexbg', handler: handler.getIndexBG},

	{method : 'GET', path: '/sidebarbg', handler: handler.getsidebarbg},

	{method : 'GET', path: '/getRecords', handler: handler.getRecords},

	{method : 'GET', path: '/sendMail', handler: handler.sendMail},

	{method : 'GET', path: '/welcome', handler: handler.welcome},
	
	{method : 'POST', path: '/save', handler: handler.save},

	{method : 'GET', path: '/find', handler: handler.find},

	{method : 'DELETE', path: '/Delete', handler: handler.delete},

	{method : 'PUT', path : '/Update', handler: handler.update}
	])
}
