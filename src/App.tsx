
import { useEffect, useState } from 'react'
import './App.css'
import { FlowersList } from './components/FlowersList'


type Flower = {
  id: number
  price: number
  instructions: string
  photo: string
  name: string
}
function App() {
  const [flowers, setFlowers] = useState<Flower[]>([])

  useEffect(() => {
    fetch("http://localhost:3006/flowers")
      .then((resp) => resp.json())
      .then((flowersFromServer) => setFlowers(flowersFromServer))
  })

  return (
    <div className="App">
      <header>
        {/* ///here will do some links   and maybe a search bar , searching for things*/}
      </header>

      < FlowersList flowers={flowers} />


    </div>
  )
}

export default App
