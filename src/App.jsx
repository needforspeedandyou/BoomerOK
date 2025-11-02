import './App.css'
import { Header } from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { useState } from 'react'

function App() {
  const [lang, setLang] = useState('English')

  return (
    <>
      <BrowserRouter>
        <Header lang={lang}/>
        <Routes>
          <Route element={<HomePage></HomePage>}></Route>
          <Route element={<></>}></Route>
          <Route element={<></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
