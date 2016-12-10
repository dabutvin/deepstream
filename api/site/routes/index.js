var express = require('express');
var router = express.Router();

const deepstream = require('deepstream.io-client-js');
const client = deepstream('localhost:6020').login();

client.rpc.provide('chat', function( data ){
	console.log('DEEPSTREAM PROVIDE: ' + data);
});

router.post('/chat', function(req, res, next) {
	client.rpc.make('chat', req.body.chat, function (data) {
		// console.log('DEEPSTREAM: ' + data);
	});
	res.end();
});




module.exports = router;
