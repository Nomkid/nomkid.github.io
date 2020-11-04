const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/site/index.html")
})

app.get('/dashboard', (req, res) => {
    res.sendFile(__dirname + "/dashboard.html")
})

app.get('/post', (req, res) => {
    res.sendFile(__dirname + "/post.html")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})