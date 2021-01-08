import {useState} from 'react';

export function useCount(startCount){
    const [countStr, setCount] = useState( startCount || 1);
    const onChange = e => setCount(e.target.value);
    const count = Number(countStr);

    return{ count, setCount, onChange}
}