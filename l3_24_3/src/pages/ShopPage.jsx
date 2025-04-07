import React, { useLayoutEffect, useState } from 'react'
import ShopForm from '../components/ShopForm'
import ShopList from '../components/ShopList'

export default function ShopPage() {
  const [list,setList] = useState([
    {name:"Milk",id:1},
    {name:"Coffee",id:2},
  ])

  useLayoutEffect(() => {
    checkLocal()
  },[])

  const checkLocal = () => {
    if(localStorage.getItem("shop")){
      setList(JSON.parse(localStorage.getItem("shop")))
    }
  }

  const addItem = (newItem) => {
    // מייצר בליסט מערך חדש
    // שבנוי מהתאים של הרשימה הקודמת פלוס תא חדש
    // עם הפריט
    setList([...list,newItem])
    localStorage.setItem("shop",JSON.stringify([...list,newItem]))
  }
  return (
    <div className='container'>
      <ShopForm addItem={addItem}/>
      <ShopList list={list} />
    </div>
  )
}
