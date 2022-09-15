import React from 'react'

function Items({id, item, name, category, price, deletedItem, onUpdate}){
    

    function handleDeleteClick() {
        fetch(`http://localhost:9292/items/${id}`, {
            method: "DELETE",
        })
            .then((resp) => resp.json())
            .then(() => deletedItem(item));
    }
    
    return(
        <div className="item">
            <div className="item-header">
            <h2>Item: {name}</h2>
            </div>
            <span>Category: {category}</span>
            <div className="item-footer">
            <span>Price: {price}</span>
            <button onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>

    );
}

export default Items; 