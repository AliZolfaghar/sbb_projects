const port = 80
const express = require('express');

const app = express()

app.use(express.static('./www'))


app.listen(port , ()=>{
    console.log('app start on port ' , port)
})




