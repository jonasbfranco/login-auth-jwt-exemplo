import express from 'express'

const app = express()
app.use(express.json())

const transactions = []

app.get('/transactions', (req, res) => {
    res.status(200).json(transactions)
})

app.post('/transactions', (req, res) => {
    
    // console.log(req.body)
    
    transactions.push(req.body)

    res.status(201).json(req.body)
})

app.put('/transactions', (req, res) => {
    res.send('Atualizando transação')
})

app.delete('/transactions', (req, res) => {
    res.send('Deletando transação')
})

app.listen(3000)