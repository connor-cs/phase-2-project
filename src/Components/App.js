import { useState, useEffect } from 'react';
import CardContainer from './CardContainer';
import Nav from './Nav'
import Favorites from './Favorites';
import { Routes, Route } from 'react-router-dom'


function App() {
  document.title = 'Crypto App'
  const [coins, setCoins] = useState([])
  const [formInput, setFormInput] = useState('')
  const [favs, setFavs] = useState([])

  useEffect(() => {
    fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=USD')
      .then(res => res.json())
      .then(data => setCoins(data.coins))

  }, [])
  // console.log(coins)

  useEffect(() => {
    const filteredCoins = coins.filter(coin => {
      return coin.name.toLowerCase().includes(formInput.toLowerCase())
    })
    setCoins(filteredCoins)
  }, [formInput])



  function handleForm(input) { setFormInput(input) }

  function handleFav(input) {
    console.log('favs:', favs)
    fetch('http://localhost:3001/watchlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    })
      .then(res => res.json())
      .then(data => setFavs([...favs, data]))
  }

  function handleDelete(coin) {
    console.log(favs)
    console.log(coin)
    const filteredFavs=favs.filter(favs=>favs.favId !== coin.favId)
    setFavs(filteredFavs)
    //make delete request and update favs
    fetch(`http://localhost:3001/watchlist/${coin.favId}`, {
      method: 'DELETE'
    })
      .then(r => r.json())
  }


  return (
    <div className="App">
      <Nav handleForm={handleForm} formIn={formInput} />

      <Routes>

        <Route exact path='/favorites' element={<Favorites favorites={favs} handleClick={handleDelete} />}></Route>

        <Route exact path='/home' element={<CardContainer coinData={coins} handleClick={handleFav} />}></Route>

      </Routes>

    </div>
  );
}

export default App;
