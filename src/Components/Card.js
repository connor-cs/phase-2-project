import React from 'react'

export default function Card({id, icon, name, rank, price, marketCap, change}) {
  return (
    <div key={id} class='coincard'>
      <img src={icon} class='image'/>
      <h2>{name}</h2>
      <p>rank: {rank}</p>
      <p>Price: ${price}</p>
      <p>Percent change 1 day: {change} %</p>
      <p>Market cap: {marketCap}</p>
    </div>
  )
}
