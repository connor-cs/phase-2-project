import React from 'react'
import Card from './Card'

export default function CardContainer({coinData, handleFav}) {
  // console.log(coinData)
  
  const coinsList = coinData.map(coin => {
    return (<Card 
      key={coin.id}
      id={coin.id} 
      icon={coin.icon} 
      name={coin.name}
      rank={coin.rank}
      price={coin.price}
      change={coin.priceChange1d}
      marketCap={coin.marketCap}
      ticker={coin.symbol}
      handleFav={handleFav}
    />)
  })
  // console.log(coinsList)
  
  return (
    <div className='container'>
      {coinsList}
    </div>
  )
}
