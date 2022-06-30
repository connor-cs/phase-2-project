import React, { useEffect, useState } from 'react'
import Card from './Card'


export default function Blockchains() {

  //get this data from local db
  const [chains, setChains] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/blockchains')
      .then(res=>res.json())
      .then(data =>setChains(data))
  }, [])

  const blockchains = chains.map(chain => {
    return (
      <Card
        key={chain.id}
        id={chain.id}
        icon={chain.icon}
        name={chain.name}
        rank={chain.rank}
        price={chain.price}
        change={chain.priceChange1d}
        marketCap={chain.marketCap}
        ticker={chain.symbol}
      />
    )
  })

  return (
    <div>
      <h1 className='header'>Top Smart Contract Blockchains</h1>
      <div className='blockchains'>
        {blockchains}
      </div>
    </div>
  )
}
