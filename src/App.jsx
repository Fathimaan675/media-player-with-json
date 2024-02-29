import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homecom from './pages/Homecom'
import Landingpage from './pages/Landingpage'
import Watch from './pages/Watch'
import Mfooter from './Components/Mfooter'
import Mheader from './Components/Mheader'


function App() {
  

  return (
          <>  <Mheader/>
        
  
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/Home' element={<Homecom/>}/>
        <Route path='/Watch' element={<Watch/>}/>
      </Routes>
      <Mfooter/>
      </>
  )
}

export default App
