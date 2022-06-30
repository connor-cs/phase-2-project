import React from 'react'
import Card from './Card'

export default function CardContainer({coinData, handleClick}) {
  // console.log(coinData)
  
  const coinsList = coinData.map(coin => {
    return (<Card
      coin={coin} 
      key={coin.id}
      id={coin.id} 
      icon={coin.icon} 
      name={coin.name}
      rank={coin.rank}
      price={coin.price}
      change={coin.priceChange1d}
      marketCap={coin.marketCap}
      ticker={coin.symbol}
      handleClick={handleClick}
    />)
  })
  // console.log(coinsList)
  
  return (
    <div className='container'>
      {coinsList}
    </div>
  )
}
