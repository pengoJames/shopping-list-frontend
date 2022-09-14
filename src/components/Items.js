import React from 'react'

function Items({name, category, price}){
    
    
    return(
        <div className="item">
            <div className="item-header">
            <h1>ITEM: {name}</h1>
            </div>
            <span>{category}</span>
            <div className="item-footer">
            <span>PRICE: {price}</span>
            </div>
        </div>

    );
}

export default Items 