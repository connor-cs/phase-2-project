import React from 'react'
import Card from './Card'
import { useEffect, useState } from 'react'

export default function Favs({favorites, handleClick}) {
  
  console.log(favorites)

  const [watchlist, setWatchist] = useState([])
  
  useEffect(()=> {
    fetch('http://localhost:3001/watchlist')
      .then(res=>res.json())
      .then(data => setWatchist([...watchlist, ...data]))
  },[])
  console.log('watchlist:', watchlist)
  

  return (
    <>
    <div>
      {watchlist.map(fav=> {
        console.log('fav', fav)
        return (<Card 
          key={fav.id}
          id={fav.id}
          coin={fav} 
          icon={fav.icon} 
          name={fav.name}
          rank={fav.rank}
          price={fav.price}
          change={fav.priceChange1d}
          marketCap={fav.marketCap}
          ticker={fav.symbol}
          handleClick={handleClick}
        />) 
      })}
    </div>
    </>
  )
}
