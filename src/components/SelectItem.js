import React, { useState } from 'react'


function SelectItem() {
  const [itemData, setItem ] = useState({
    id:"",
    name:"",
    category:"",
    price:"",
    buyer_id:"",
  })
function handleChange(event){
    const name = event.target.name
    const value = event.target.value
    
    setItem({
        ...itemData,[name]:value
    })
  }
  function handleSubmit(e){
    e.preventDefault();
    
    fetch("http://localhost:9292/items",{
      method:"POST",
      headers: {
        "content-Type":"application/json"
      },
      body:JSON.stringify(itemData),
    })
    .then((resp) => resp.json())
    .then((newItem) => setItem(newItem))
  }

  return (
    <div className='shop-app'>
        <form className='NewItem'onSubmit={handleSubmit}>
          <div className='select-items'> 
            <div className='label'>
                <label>Item Name</label>
            </div>
            <input type="text" name='name' value={itemData.name} onChange={handleChange}/>
           
            <div className='label'>
                <label>Category of Item</label>
            </div>
            <input type="text" name='category'value={itemData.category} onChange={handleChange}/>
            
            <div className='label'>
                <label>Price of Item</label>
            </div>
            <input type="number" name='price'value={itemData.price} onChange={handleChange}/>

            <div className='label'>
                <label>Buyer</label>
                <select name ="buyer_id" value={itemData.buyer_id} onChange ={handleChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </select>
            </div>
            <button type="submit">Add Item</button>
          </div>
        </form>
    </div>
  )
}

export default SelectItem;