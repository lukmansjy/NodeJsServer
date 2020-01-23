const http = require('http')
const fs = require('fs')
const url = require('url')

const showView = (path, res) =>{
    fs.readFile(path, (err, data)=>{
        if(err){
            res.writeHead(404)
            res.write('File Not Found!')
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
        }
        res.end()
    })
}

const route = (req, res) => {
    let path = url.parse(req.url).pathname
    switch(path){
        case '/':
            showView('./views/index.html', res)
            break;
        case '/users':
            showView('./views/users.html', res)
            break;
        default:
            showView('./views/404.html', res)
    }
}

const server = http.createServer(route)

server.listen(3030, ()=>{
    console.log('Server berjalan...')
})