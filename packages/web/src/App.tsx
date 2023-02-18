import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header,Footer } from '@monorepo/ui-components'
import Home from './views/Home'


function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState<any>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const API = import.meta.env.VITE_ENDPOINT || 'http://localhost:3003'

  

  return (
    <div className="App">
      
      
    <Header></Header>
      <section className="container mx-auto">
        <Home></Home>
      </section>
      <Footer></Footer>
      {/* 
      
       */}
    </div>
  )
}

export default App
