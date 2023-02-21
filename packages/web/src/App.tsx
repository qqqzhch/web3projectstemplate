import { Header, Footer, Web3Provider } from '@monorepo/ui-components'
import Home from './views/Home'

function App() {

  return (
    <div className="App">
      <Web3Provider>
        <Header></Header>
        <section className="container mx-auto">
          <Home></Home>
        </section>
        <Footer></Footer>
      </Web3Provider>
    </div>
  )
}

export default App
