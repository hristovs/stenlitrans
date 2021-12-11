import {useEffect, useState} from 'react'; 
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)
    const abortCtrl = new AbortController();
    useEffect(() => {
        setTimeout(() => {
        fetch(url, {signal: abortCtrl.signal}).then(res => {
            if(!res.ok){
              throw Error('Could not fetch data for resource');
            }

            return res.json();
        }).then(data => {
            setData(data)
            setIsPending(false)
            setError(null);
        }).catch(err => {
            if(err.name === "AbortError"){
                console.log('fetch aborted');
            }else{
            setIsPending(false);
            setError(err.message);
            }
        })},1000)
        return () => abortCtrl.abort();
    },[url]);
    return { data, isPending, error }
}

export default useFetch;
