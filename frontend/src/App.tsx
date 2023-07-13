import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type Quote = {
  _id: string
  quote: string
}

function App() {
  const [hello, setHello] = useState('')
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [quoteInput, setQuoteInput] = useState('')

  const sayHello = (lang: string) => {
    fetch(import.meta.env.VITE_GATEWAY_ENDPOINT + '/hello/lang/' + lang)
      .then((response) => response.json())
      .then((data) => {
        setHello(data.message)
      })
  }

  const fetchQuotes = () => {
    fetch(import.meta.env.VITE_GATEWAY_ENDPOINT + '/quote')
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.quote)
      })
  }

  const handleCreateQuote = () => {
    if (!quoteInput) return

    fetch(import.meta.env.VITE_GATEWAY_ENDPOINT + '/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quote: quoteInput })
    }).then(() => {
      fetchQuotes()
      setQuoteInput('')
    })
  }

  useEffect(() => {
    fetchQuotes()
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Microservices Lab</h1>
      <h2>{hello}</h2>
      <div className="card">
        <button onClick={() => sayHello('es')}>Say Hola</button>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <label htmlFor="quote">Add a quote</label>
          <div>
            <input type="text" id="quote" value={quoteInput} onChange={(e) => setQuoteInput(e.target.value)} />
            <button style={{ marginLeft: 20 }} onClick={handleCreateQuote}>
              Create Quote
            </button>
          </div>
        </div>
        {quotes.map((quote) => (
          <p key={quote._id}>{quote.quote}</p>
        ))}
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
