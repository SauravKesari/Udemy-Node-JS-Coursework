const getUrl =  (req,res) => {
    let url = req.url;
   
     if(url === '/') {
        res.setHeader('Content-type','text/html');
        res.write('<form action = "/create-user" method ="POST"><input type = "text" name ="username"/><button>Submit</button></form>');
        res.end();
    } else if (url === '/create-user' && req.method === 'POST') {
        const arr = []
        res.setHeader('Content-type','text/html');
        req.on('data', (chunk) => {
         console.log(chunk);
         arr.push(chunk);
        })
        
        .on('end', () => {
         const parseBody = Buffer.concat(arr).toString().split('=')[1];
         res.write('You have entered username: '+parseBody);
          
          });

        
        return res.end();
    }
}

module.exports = getUrl;