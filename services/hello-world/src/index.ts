import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import { HelloModel } from './models/Hello'

const app = express()
app.use(express.json())

mongoose
  .connect(process.env.COSMOS_URI)
  .then(() => {
    console.log('Cosmos DB connected')
  })
  .catch((err) => {
    console.error(err)
  })

app.get('/', async (_, res) => {
  const result = await HelloModel.find()
  res.json(result)
})

app.get('/lang/:code', async (req, res) => {
  const result = await HelloModel.findOne({
    lang: req.params.code
  })

  res.json(result ?? { error: 'lang not found' })
})

app.post('/', async (req, res) => {
  const { lang, message } = req.body || {}

  if (!lang || !message) {
    res.status(400).json({ error: 'lang and message are required' })
    return
  }

  try {
    const newHello = await new HelloModel({
      lang,
      message
    }).save()

    res.status(200).json(newHello)
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

app.listen(80, () => {
  console.log('server started on port 80')
})
