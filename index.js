const express = require('express')
const cors = require('cors')

console.log(process.env.HOME)

const PORT = process.env.PORT || 5000

const server = express()

server.use(express.json())
server.use(cors)

server.get('/', (req,res) => {
    res.send(`<h1>In progress</h1>`)
})

server.get('/api', (req,res) => {
    res.json({message:'now a message in json'})
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

