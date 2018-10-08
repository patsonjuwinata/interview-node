var http = require('http');
var url = require('url');
http.createServer(function(req,res) {
    res.writeHead(200,{"Content-Type" : "text/html"});
    var obj = url.parse(req.url, true);
    if (obj['query']['pairs'] != undefined && obj['query']['amount'] != undefined) {        
        var pairs = obj['query']['pairs'];
        var amount = obj['query']['amount'];
        var rate = 15000; 
        var output = parseInt(amount,10)*parseInt(rate,10);
        res.write('<html>\n<body>\n');
        res.write('<h1>Output: '+pairs+' = '+amount+'*'+rate+' = '+output.toString()+'</h1>\n');
        res.write('</body>\n</html>');
    } else {
        res.write('<html>\n<body>\n');
        res.write('<h1>Example: http://localhost:8080/?pairs=USDIDR&amount=1000</h1>\n');
        res.write('</body>\n</html>');
    }
    res.end();
}).listen(8080);


