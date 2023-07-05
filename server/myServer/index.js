import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/values', (req, res) => {
    res.json([70,2,3,4])
})

export default fromNodeMiddleware(app)