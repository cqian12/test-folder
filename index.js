require('dotenv').config() //allows you to stash artificial env variables in a file
const express = require('express')
const cors = require('cors')

console.log(process.env.HOME)
console.log(process.env.ANOTHER)

const PORT = process.env.PORT || 5000 //don't need a fallback port if the dev using this has a .env

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

