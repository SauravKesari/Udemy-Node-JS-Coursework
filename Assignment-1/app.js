const http = require('http');

const getUrl = require('./routes/route'); 
const app = http.createServer(getUrl
    
    // -----First Task --------------
    // if(url === '/') {
    //     res.setHeader('Content-type','text/html');
    //     res.write('<h1>Hello, I am here!</h1>');
    //     res.end();
    // } else if (url === '/users') {
    //     res.setHeader('Content-type','text/html');
    //     res.write('<ul>');
    //     res.write('<li>User 1</li>')
    //     res.write('<li>User 2</li>')
    //     res.write('<li>User 3</li>')
    //     res.write('</ul>');
    //     res.end();
    // }

)

app.listen(3000,() => {
    console.log('server is listening on port 3000');
})