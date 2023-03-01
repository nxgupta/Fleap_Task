import { useNavigate } from 'react-router-dom';
import DisplayData from '../components/DisplayData';
import Loader from '../utils/loader';
const Display = ({ displayData, isLoading }) => {
  const navigate = useNavigate();
  {console.log(isLoading)}
  if(isLoading){ return <Loader/>}
  return (
    <div className='container'>
      {displayData.length > 0 ? 
      (displayData.map((item, index) => <DisplayData key={index} name={item.name.value} email={item.email.value} phone={item.phone.value} country={item.country.value} />))
       : 
       (<h5 className='no-data'>There is no data available</h5>)}
      <div className="btn-div" onClick={() => navigate('/')}><button className="btn">Home Page</button></div>
    </div>
  )
}
export default Display