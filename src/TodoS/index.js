import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoS.css';

function TodoS() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    
    const onSearchValueChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    };

    return [
        <input 
            className="TodoS" 
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />,
    ];
}
export {TodoS};