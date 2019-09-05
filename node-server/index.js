var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')
var server = http.createServer(function(req,res){
    setTimeout(function(){
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.writeHead(200,'yes')
        var pathObj = url.parse(req.url,true)
        switch(pathObj.pathname){
            case '/getWeather':
                var ret
                if(pathObj.query.city == 'Zhuzhou'){
                ret = {
                    city: 'Zhuzhou',
                    weather: 'sunny'
                }
            }
            else {
                ret = {
                    city: pathObj.query.city,
                    weather: 'nonono'
                }
            }
            res.end(JSON.stringify(ret))
            break;
            case '/me':
                res.write('<!doctype html><head></head><body><h1>这里是README</h1></body></html>')
                res.end( fs.readFileSync(__dirname + '/README.md'))
                break;
            default:
                res.end( fs.readFileSync(__dirname + '/sample' + '/test.html'))
                }}),2000})
console.log('open http://localhost:8080')
server.listen(8080)