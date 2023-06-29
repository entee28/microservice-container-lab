import express from 'express'
import db from './db'

const app = express()

const getLangObj = (lang: string) => {
  const res = db.filter((item) => item.lang === lang)

  if (res.length === 0) {
    return { message: 'Language not found' }
  }

  return res[0]
}

app.get('/', (_, res) => {
  res.json(getLangObj('en'))
})

app.get('/lang/:code', (req, res) => {
  res.json(getLangObj(req.params.code))
})

app.get('/health', (_, res) => {
  if (!db) {
    res.status(500).json({ status: 'DOWN' })
  }

  res.json({ status: 'UP' })
})

app.listen(4000, () => {
  console.log('server started on port 4000')
})
