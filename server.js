const http=require('http'),fs=require('fs'),path=require('path');
const root=path.join(__dirname);
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.jpg':'image/jpeg','.png':'image/png','.json':'application/json','.svg':'image/svg+xml'};
http.createServer((req,res)=>{
  let u=decodeURIComponent(req.url.split('?')[0]);
  if(u==='/')u='/index.html';
  let f=path.join(root,u);
  if(!f.startsWith(root))return res.writeHead(403).end();
  fs.readFile(f,(e,d)=>{
    if(e)return res.writeHead(404).end('404');
    res.writeHead(200,{'Content-Type':types[path.extname(f)]||'application/octet-stream','Cache-Control':'no-cache'});
    res.end(d);
  });
}).listen(8081,()=>console.log('refresca en http://localhost:8081'));
