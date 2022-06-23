import { useState, useEffect } from 'react';
import CardContainer from './CardContainer';
import Home from './Home';
import Nav from './Nav'

function App() {
  
  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=USD')
      .then(res=>res.json())
      .then(data=>setCoins(data.coins))
      
  }, [])
console.log(coins)
  

  
  return (
    <div className="App">
      <Nav />
      <Home />
      <CardContainer coinData={coins}/>
    </div>
  );
}

export default App;
