import { useState, useEffect } from "react";

const List = ({ getItems }) => {
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        // Chama a função getItems para obter os itens e depois define o estado
        const items = getItems();
        console.log("Buscando pelo DB");
        
        setMyItems(items);
    }, [getItems]);

    return (
        <div>
            {myItems.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
};

export default List;
