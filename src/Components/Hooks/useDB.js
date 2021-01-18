import { useEffect, useState } from 'react';

export const useDb = database => {
    const [db, setDb] = useState(null);
    useEffect(()=> {
        const dbRef = database.ref('goods');
        dbRef.on('value', snapshot => {
            setDb(snapshot.val());
        });
    }, [database])
    return db;
}