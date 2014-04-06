// routes.js
module.exports = {
	routes : {
		'/': {
			'controller': 'index'
		},
		// json returns
		'/get/server/(.)+': {
			'controller': 'retrieve'
		},
		'/get/servers': {
			'controller': 'servers'
		},
		// 404
		'404': {
			'controller': '404'
		},
		// assets
		'/asset/(.)+': {
			'controller': 'asset'
		}
	}
};