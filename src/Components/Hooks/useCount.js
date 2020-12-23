import {useState} from 'react';

export function useCount(){
    const [countStr, setCount] = useState(1);
    const onChange = e => setCount(e.target.value);
    const count = Number(countStr);

    return{ count, setCount, onChange}
}