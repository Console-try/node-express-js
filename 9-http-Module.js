const http = require('http')

const server = http.createServer((req,res)=>{
    // console.log("Server is Started!")
    if(req.url ==='/'){
        // res.write()
        res.end(`<h1>Welcome to our Home page</h1>`) 
    }
    else if(req.url ==='/about'){
        res.end(`<h1>Welcome to our About page:</h1><p><a href='http://youtube.com/deathcodeyt' target='_blank'>Click Here</a> to go to our YT channel.`)
    }
    else{
        res.end(`<h1>Oops!</h1><p>We cant find the page that you are looking for.<br><a href='/'>Back to home</a>.`)
    }
})

server.listen(3436)
