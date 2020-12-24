import { useState } from 'react';

const getTopping = toppings => toppings.map( item => ({
    name: item,
    checked: false
})) 

export const useToppings = (openItem) => {
    const readyToppings = openItem.toppings && getTopping(openItem.toppings) || [];
    const [toppings, setToppings] = useState(readyToppings);
    
    const checkToppings = index => {
        setToppings(toppings.map((item, i) => {
            if(i === index) { item.checked = !item.checked }
            return item;
        }));
    }
    return{ toppings, checkToppings }
}