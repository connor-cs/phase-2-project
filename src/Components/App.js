import { useState, useEffect } from 'react';
import CardContainer from './CardContainer';
import Home from './Home';
import Nav from './Nav'

function App() {
  
  const [coins, setCoins] = useState([])
  const [formInput, setFormInput] = useState('')
  
  useEffect(() => {
    fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=USD')
      .then(res=>res.json())
      .then(data=>setCoins(data.coins))
      
  }, [])
  console.log(coins)
  
  function handleForm(input) {
    setFormInput(input)
  }

  useEffect(()=> {
    const filteredCoins = coins.filter(coin => {
      return coin.name.toLowerCase().includes(formInput.toLowerCase())
    })
    console.log(filteredCoins)
    setCoins(filteredCoins)
  }, [formInput])
  
  return (
    <div className="App">
      <Nav handleForm={handleForm}/>
      <CardContainer coinData={coins}/>
    </div>
  );
}

export default App;
