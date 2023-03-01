import { useState } from 'react'
import Form from './Pages/Form'
import {Routes,Route} from 'react-router-dom'
import Display from './Pages/Display'
const App = () => {

  const [displayData,setDisplayData]=useState([]);
  let [isLoading,setIsLoading] = useState(false);
  return (
    <Routes>
      <Route path='/' element={<Form setDisplayData={setDisplayData} isLoading={isLoading} setIsLoading={setIsLoading}/>}/>
      <Route path='/display' element={<Display displayData={displayData} isLoading={isLoading}/>}/>
    </Routes>
  )
}

export default App

