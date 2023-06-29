import express from 'express'
import db from './db'

const app = express()

const getQuoteById = (id: number) => {
  const res = db.filter((item) => item.id === id)

  if (res.length === 0) {
    return { message: 'Quote not found' }
  }

  return res[0]
}

app.get('/', (_, res) => {
  res.json(getQuoteById(Math.floor(Math.random() * (3 - 1 + 1)) + 1))
})

app.get('/get/:id', (req, res) => {
  res.json(getQuoteById(parseInt(req.params.id)))
})

app.get('/health', (_, res) => {
  if (!db) {
    res.status(500).json({ status: 'DOWN' })
  }

  res.json({ status: 'UP' })
})

app.listen(6000, () => {
  console.log('server started on port 6000')
})
