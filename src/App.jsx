import { useState } from 'react'
import { resource } from './db/data'
import './App.css'
import AudioPlayer from './components/AudioPlayer'

function App() {
  const [data, setData] = useState(resource)
  const [index, setIndex] = useState(1)

  const handleNext = () => {
    index === data?.length ? setIndex(1)
      : setIndex(index + 1)
  }
  console.log("render app")
  const handlePrev = () => {
    index === 1 ? setIndex(data?.length)
      : setIndex(index - 1)
  }

  return (
    <div className="App nes-container is-dark with-title">

      <picture className='image-container'>
        <img
          src={`/${index}.gif`}
          allowFullScreen />

        <div className="btn-container">
          <button className='btn-prev' onClick={handlePrev}>Anterior</button>
          <button className='btn-next' onClick={handleNext}>Siguiente</button>
        </div>
      </picture>


      <div className="controllers">
        <AudioPlayer audioUrl={data[index]?.url} />
      </div>
    </div>
  )
}

export default App
