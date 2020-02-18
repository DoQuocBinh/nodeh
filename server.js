var http=require('http')
var port = process.env.PORT || 3000;

var server=http.createServer((function(request,response)
{
	response.writeHead(200,
	{"Content-Type" : "text/plain"});
	response.end("Hello World 123\n");
}));
server.listen(port);
