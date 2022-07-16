import Menu from './components/Menu/Menu.jsx' 
import Home from './pages/Home/Home.jsx' 
import Footer from './components/Footer/Footer.jsx';
import ListFlight from './pages/ListFlights/ListFlight.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {useState,useEffect} from'react'
import axios from 'axios'


function App() {
  const checkURL=window.location.pathname
  const [flight,setFlight]=useState({})
  
  function fetchData(){
    axios.get('https://mocki.io/v1/ff3207e0-f250-4a1d-9240-b3dbffa8386a')
    .then(res=>{
      setFlight(res.data.Flights[0])
      
    }).catch(err=>{
      console.log(err);
    })
  }
  useEffect(() => {
    fetchData()
  },flight)


  
  return (
    <div className="App bg-[#f4f2f9]">
        <Menu props={checkURL}/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home props={flight}/>}></Route>
            <Route path="/listflights" element={<ListFlight props={flight} />}></Route>
          </Routes>
      </BrowserRouter>
        
        <Footer/>
    </div>
  );
}

export default App;
