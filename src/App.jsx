import './App.css'
import ShowPhrase from './components/ShowPhrase'
import ShowButton from './components/ShowButton'
import randomArr from './services/randomArr'
import arr from './utils/phrases.json'
import { useState } from 'react'
import imagesArr from  './utils/images.json'


function App() {

  const quite = randomArr(arr)
  const [randomPhrase, setRandomPhrase] = useState(quite)
  const photo = randomArr(imagesArr)
  const [image, setImage] = useState(photo)

  const appStyles = {
    backgroundImage: `url('../fortuna-2/fondo${image}.png')`,
  }
  return (
    <div style={appStyles} className='app'>
      <h1 className='app_title'>Galletas de la fortuna</h1>
      <ShowButton
        setImage={setImage}
        setRandomPhrase={setRandomPhrase}
      />   
      <ShowPhrase
        randomPhrase={randomPhrase}
      />  
    </div>
  )
}

export default App
