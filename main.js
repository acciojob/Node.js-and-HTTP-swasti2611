const http = require('http');

const server = http.createServer((req, res) => {
  // TODO: Implement this function
  if(req.url==="/"){
    if(req.method==='GET'){
      res.end(JSON.stringify({message:"this is get request"}))
    }
    else{
      res.end(JSON.stringify({message:"this is post request"}))
    }
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = { server };
