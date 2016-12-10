const deepstream = require('deepstream.io-client-js');
const client = deepstream('localhost:6020').login();

client.rpc.provide('chat', function( data ){
	console.log(data);
});