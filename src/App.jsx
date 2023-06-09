import { useRef } from 'react'
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const myRef = useRef(null)
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
        <Form />  
      <Footer />  
    </>

    /*
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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  */
  )
}

export default App
