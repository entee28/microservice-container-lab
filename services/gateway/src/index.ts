import express from 'express'
import httpProxy from 'http-proxy'
import cors from 'cors'

const app = express()
const apiProxy = httpProxy.createProxyServer()

const HELLO_SERVICE_ENDPOINT = 'http://localhost:4000'
const QUOTE_SERVICE_ENDPOINT = 'http://localhost:6000'

app.use(cors())

app.get('/hello', function (req, res) {
  req.url = req.url.replace('/hello', '/')
  apiProxy.web(req, res, { target: HELLO_SERVICE_ENDPOINT })
})

app.get('/hello/:id', function (req, res) {
  req.url = req.url.replace('/hello', '/')
  apiProxy.web(req, res, { target: HELLO_SERVICE_ENDPOINT })
})

app.get('/quote', function (req, res) {
  req.url = req.url.replace('/quote', '/')
  apiProxy.web(req, res, { target: QUOTE_SERVICE_ENDPOINT })
})

app.get('/quote/:id', function (req, res) {
  req.url = req.url.replace('/quote', '/')
  apiProxy.web(req, res, { target: QUOTE_SERVICE_ENDPOINT })
})

app.listen(5000, () => {
  console.log('gateway started on port 5000')
})
