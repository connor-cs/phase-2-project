import { useState, useEffect } from 'react';
import CardContainer from './CardContainer';
import Home from './Home';
import Nav from './Nav'
import Favorites from './Favorites';
import { Routes, Route } from 'react-router-dom'


function App() {
  document.title='Crypto App'
  const [coins, setCoins] = useState([])
  const [formInput, setFormInput] = useState('')
  const [favs, setFavs] = useState([])
  
  useEffect(() => {
    fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=USD')
      .then(res=>res.json())
      .then(data=>setCoins(data.coins))
      
  }, [])
  // console.log(coins)

  useEffect(()=> {
    const filteredCoins = coins.filter(coin => {
      return coin.name.toLowerCase().includes(formInput.toLowerCase())
    })
    setCoins(filteredCoins)
  }, [formInput])
  
  
  
  function handleForm(input) {setFormInput(input)}
  
  function handleFav(input) 
  {setFavs([...favs, input]) 
    console.log('favs:', favs)
    fetch('http://localhost:3001/watchlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify(input)
  })
  }

  function handleDelete(coin) {
    console.log('delete function')
    console.log(coin)
    //make delete request and update favs
    fetch(`http://localhost:3001/watchlist/${coin.favId}`, {
      method: 'DELETE'})
      .then(r=>r.json())
      .then(data => console.log(data))
  }


  return (
    <div className="App">
      <Nav handleForm={handleForm} formIn={formInput}/>
      
      <Routes>
        
        <Route exact path='/favorites' element={<Favorites favorites={favs} handleClick={handleDelete}/>}></Route>
        
        <Route exact path='/home' element={<CardContainer coinData={coins} handleClick={handleFav}/>}></Route>
      
      </Routes>
    
    </div>
  );
}

export default App;
