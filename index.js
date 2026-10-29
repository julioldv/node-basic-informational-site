import {createServer} from "node:http";
import {readFile} from "node:fs/promises";

const indexContent = await readFile("./index.html", "utf8");
const aboutContent = await readFile("./about.html", "utf8");
const contactMeContent = await readFile("./contact-me.html", "utf8");
const notFoundContent = await readFile("./404.html", "utf8");


const server = createServer ((req, res) =>{
    
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(indexContent);
    } else if(req.url === "/about"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(aboutContent);
    } else if(req.url === "/contact-me"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(contactMeContent)
    } else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end(notFoundContent);
    }
});


server.listen(8080, ()=>{
    console.log("Server running on port 8080");
})

process.on('SIGINT', () => {
  console.log('\nCerrando servidor...');

  server.close(() => {
    console.log('Servidor cerrado correctamente');
    process.exit(0);
  });
});