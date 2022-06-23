import React from 'react'
import Card from './Card'

export default function CardContainer({coinData}) {
  console.log(coinData)
  
  const coinsList = coinData.map(coin => {
    return (<Card 
      id={coin.id} 
      icon={coin.icon} 
      name={coin.name}
      rank={coin.rank}
      price={coin.price}
      marketCap={coin.marketCap}
    />)
  })
  // console.log(coinsList)
  
  return (
    <div>
      {coinsList}
    </div>
  )
}
