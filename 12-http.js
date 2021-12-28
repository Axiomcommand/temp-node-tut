const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Sex is good, sex is great, sex is all it takes')
    }
    else if(req.url === '/about'){
        res.end('Nothing in life, life for me suck, I hate myslef')
    }
    else {
        res.end(`
        <h1>Sex is not given</h1>
        <p>Unfortunetly for you, you are a very dark skin black ugly man, you'll will never find anyone to love</p>
        <a href="/">Click Here To Come To Your End</a>
        `)
    }
})

server.listen(port)