var http = require('http');
var qs = require('querystring');


http.createServer(function(req,res){

    //Login request
    if (req.url == '/login' && req.method == 'POST') {
        var body = '';

        req.on('data',function(data){
            body += data;
            if (body.length > 1e6) req.connection.destroy();
            
        });

        req.on('end',function(){
            var post = qs.parse(body);
            if (post.username == 'user' && post.password == 'pass') {
                console.log('user login ...')
            }
        });        
    }
}).listen(5000);

