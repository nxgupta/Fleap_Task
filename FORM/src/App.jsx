import { useState } from 'react'
import Form from './Pages/Form'
import {Routes,Route} from 'react-router-dom'
import Display from './Pages/Display'
const App = () => {

  const [displayData,setDisplayData]=useState([]);
  
  return (
    <Routes>
      <Route path='/' element={<Form setDisplayData={setDisplayData}/>}/>
      <Route path='/display' element={<Display displayData={displayData}/>}/>
    </Routes>
  )
}

export default App

