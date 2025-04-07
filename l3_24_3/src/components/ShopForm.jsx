import React, { useRef } from 'react'

export default function ShopForm({addItem}) {
  const nameRef = useRef();

  const onSub = (e) => {
    // מונע את הברירת מחדל של שיגור טופס
    e.preventDefault();
    console.log(nameRef.current.value);
    const item = {
      name: nameRef.current.value,
      // Date.now -> מחזיר בזמן יוניקס את התאריך
      // כמה מילי שניות עברו מה 1.1.1970
      id: Date.now()
    }
    addItem(item);
  }

  return (
    <div>
      <h2>Form for add product to list</h2>
      <form onSubmit={onSub} className='col-lg-5'>
        <label>Product name</label>
        <input ref={nameRef} className='form-control' type="text" />
        <button className='btn btn-success mt-2'>Add</button>
      </form>
    </div>
  )
}
