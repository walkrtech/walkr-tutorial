import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Videos } from './components/Videos'
import { Download } from './components/Download'
import { Footer } from './components/Footer'
import ScrollProgressBar from './components/ScrollProgressBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundColor: '#022c40', width: '100vw' }}>
      <div className=" pt-5">
        <Header />
        <Videos />
        <Download />
        <Footer />
      </div>
      <ScrollProgressBar />
    </div>
  )
}

export default App
