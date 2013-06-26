var http=require('http');

http.createServer(function(req, res) {
	res.end(process.env['DEV_PORT']+' '+process.env['DEV_BRANCH']);
}).listen(process.env['DEV_PORT']);
console.log(process.env);