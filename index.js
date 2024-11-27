const jsonServer = require('json-server')

const RAServer = jsonServer.create()
const middleware = jsonServer.defaults()
const PORT = 3000

const route = jsonServer.router('db.json')

RAServer.use(middleware)
RAServer.use(route)

RAServer.listen(PORT,()=>{
    console.log(`RAServer started at PORT :${PORT} and waiting ffot client request!!!`);
    
})