import React from 'react'

export default function ShopList({list}) {
  return (
    <div>
      <h2>List of products you added:</h2>
      <ul>
        {list.map(item => {
          return (
            <li className='border p-2 my-2 col-lg-5' key={item.id}>{item.name}</li>
          )
        })}
      </ul>
    </div>
  )
}
