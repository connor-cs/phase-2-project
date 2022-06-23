import React from 'react'

export default function Card({id, icon, name, rank, price, marketCap}) {
  return (
    <>
      <img src={icon} />
      <h2>{name}</h2>
      <p>rank: {rank}</p>
      <p>Price: ${price}</p>
      <p>Market cap: {marketCap}</p>
    </>
  )
}
