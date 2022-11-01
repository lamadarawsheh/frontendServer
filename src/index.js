const express = require('express')
const frontRouter = require('./routes/front.js')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(frontRouter)

app.listen(PORT, ()=>{
    console.log('Front server is up and running on port:'+ PORT)
})