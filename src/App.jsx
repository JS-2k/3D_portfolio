import './App.css'
import Home from './components/Home'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route exact path='/' element={< Home />}/>
    <Route exact path='/about' element={< About />}/>
    <Route exact path='/contact' element={< Contact />}/>
    <Route exact path='/skills' element={< Skills />}/>
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
