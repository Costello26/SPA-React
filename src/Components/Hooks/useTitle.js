import {useEffect} from 'react';

export const useTitle = openitem => {
    useEffect(() => {
        document.title = openitem ? openitem.name : 'Station21';
        //console.log('openitem: ', openitem);
    }, [openitem])
}