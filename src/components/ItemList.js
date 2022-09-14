import { useState, useEffect } from "react";
import Items from "./Items";



function ItemList() {
    const [items, setItems] = useState([]) 


    useEffect(() => {
        fetch("http://localhost:9292/items")
        .then((res) => res.json())
        .then((items) => setItems(items));
    }, []);


    function handleDeleteItem(deleteditem) {
        const updatedItems = items.filter((item) => item.id !== deleteditem.id);
        setItems(updatedItems);
    }

    function handleUpdateItem(updatedItem) {
        console.log(updatedItem);
    }

    return (
        <div className="item-list">
            {items.map((item) => (
                <Items 
                    key={item.id}
                    name={item.name}
                    category={item.category}
                    price={item.price}
                    buyer={item.buyer}
                    deleteItem={handleDeleteItem}
                    onUpdate={handleUpdateItem}
                />
            ))}

        </div>
    );
}

export default ItemList;