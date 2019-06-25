import path from 'path'
import app from './server'
import webpackDevServer from './webpack-dev-server'

webpackDevServer(app);


app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'../../dist/index.html'))
})



app.listen(3000, ()=>{console.log("Server running on port 3000")})
