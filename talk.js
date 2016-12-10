const deepstream = require('deepstream.io-client-js');
const client = deepstream('localhost:6020').login();

client.rpc.make('name1', 'hello', function (data) {
	console.log(data);
});