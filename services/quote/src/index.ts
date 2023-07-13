import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import { QuoteModel } from './models/Quote'

const app = express()
app.use(express.json())

mongoose
  .connect(process.env.cosmosuri)
  .then(() => {
    console.log('Cosmos DB connected')
  })
  .catch((err) => {
    console.error(err)
  })

app.get('/', async (_, res) => {
  const quotes = await QuoteModel.find()
  res.json(quotes)
})

app.get('/get/:id', async (req, res) => {
  const quote = await QuoteModel.findById(req.params.id)
  res.json(quote ?? { error: 'quote not found' })
})

app.post('/', async (req, res) => {
  const { quote } = req.body || {}

  if (!quote) {
    res.status(400).json({ error: 'quote are required' })
    return
  }

  try {
    const newQuote = await new QuoteModel({
      quote
    }).save()

    res.status(200).json(newQuote)
  } catch (error) {
    res.status(400).json({ error })
  }
})

app.get('/health', (_, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK' as any,
    timestamp: Date.now(),
    db: mongoose.connection.readyState
  }

  try {
    res.send(healthcheck)
  } catch (error) {
    healthcheck.message = error
    res.status(503).send()
  }
})

app.listen(6000, () => {
  console.log('server started on port 6000')
})
