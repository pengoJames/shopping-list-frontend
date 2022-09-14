import { useState, useEffect } from "react";
import Items from "./Items";



function ItemList() {
    const [items, setItems] = useState([]) 


    useEffect(() => {
        fetch("http://localhost:9292/items")
        .then((res) => res.json())
        .then((items) => setItems(items));
    }, []);

    return (
        <div className="item-list">
            {items.map((item) => (
                <Items 
                    key={item.id}
                    name={item.name}
                    category={item.category}
                    price={item.price}
                />
            ))}

        </div>
    );
}

export default ItemList