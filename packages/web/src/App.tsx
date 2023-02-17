import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header,Footer } from '@monorepo/ui-components'


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState<any>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const API = import.meta.env.VITE_ENDPOINT || 'http://localhost:3003'

  async function getData() {
    setLoading(true)
    try {
      await fetch(`${API}/api/product`, {})
        .then(response => response.json())
        .then(data => {
          setData(data)
          console.log(data)
        })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="App">
      
      
    <Header></Header>
      <section className="container mx-auto">
        ss
      </section>
      <Footer></Footer>
      {/* 
      
       */}
    </div>
  )
}

export default App
