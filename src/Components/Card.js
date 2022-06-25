import React from 'react'

export default function Card({id, icon, name, rank, price, marketCap, change, handleFav, ticker}) {
  
  function handleClick(e) {
    console.log(e.target)
    // handleFav()
  }
  
  return (
    <div key={id} className='coincard'>
      <img src={icon} class='image'/>
      <h2>{name}</h2>
      <p>rank: {rank}</p>
      <p>{ticker}</p>
      <p>Price: ${price}</p>
      <p>Percent change 1 day: {change} %</p>
      <p>Market cap: {marketCap}</p>
      <button style={{cursor: 'pointer'}} onClick={handleClick}>♡</button>
    </div>
  )
}
