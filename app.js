var http=require('http');

http.createServer(function(req, res) {
	res.end('This script was started with "'+process.argv.join(' ')+'", env variables: '+JSON.stringify(process.env,null,2));
}).listen(process.env['DEV_PORT']);
console.log(process.env);