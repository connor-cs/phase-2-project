import React from 'react'

export default function Card({id, icon, name, rank, price, marketCap, change, handleClick, ticker, coin}) {
  // console.log(coin)
  function buttonClick() {
    // console.log(id)
    // console.log(coin)
    handleClick(coin)
  }
  
  return (
    <div key={id} className='coincard'>
      <img src={icon} className='image'/>
      <h2>{name}</h2>
      <p>Rank: {rank}</p>
      <p>{ticker}</p>
      <p>Price: ${price}</p>
      <p>Percent change 1 day: {change} %</p>
      <p>Market cap: {marketCap}</p>
      <button style={{cursor: 'pointer'}} onClick={buttonClick}>Add to watchlist</button>
    </div>
  )
}
