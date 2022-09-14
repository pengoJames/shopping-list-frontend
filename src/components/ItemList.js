import { useState, useEffect } from "react";




function ItemList() {
    const [items, setItems] = useState([]) 


    useEffect(() => {
        fetch("http://localhost:9292/items")
        .then((res) => res.json())
        .then((items) => setItems(items));
    }, []);

    return (
        // <div className="item-list">
        //     {items.map((item) => (


        //     ))}

        // </div>
    )
}

export default ItemList