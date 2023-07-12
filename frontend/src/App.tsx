import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [hello, setHello] = useState('')
  const [quote, setQuote] = useState('')

  const sayHello = (lang: string) => {
    fetch(import.meta.env.VITE_GATEWAY_ENDPOINT + '/hello/lang/' + lang)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setHello(data.message)
      })
  }

  const getQuote = () => {
    fetch(import.meta.env.VITE_GATEWAY_ENDPOINT + '/quote')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote)
      })
  }

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
      <h1>Vite + React</h1>
      <h2>{hello}</h2>
      <h2>{quote}</h2>
      <div className="card">
        <button onClick={() => sayHello('en')}>Say Hello</button>
        <button onClick={() => sayHello('es')}>Say Hola</button>
        <button onClick={getQuote}>Get Quote</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
