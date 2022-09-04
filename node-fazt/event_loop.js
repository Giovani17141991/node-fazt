const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('welcome')
        return res.end()
    }
    if(req.url==='/about'){
        //blocking code
        //for(let i=0; i<100000; i++){
          //  console.log(Math.random()*i)
        //}

        return res.end('about pag')
    }

    res.end('not found')
})

server.listen(3000)
console.log('Server port 3000')