import React, {useEffect, useState} from 'react'
import CurrencyInput from './CurrencyInput'

const currencyUrl = 'https://api.exchangeratesapi.io/latest';

export default function Calculator() {
    const [currencyName, setCurrencyName] = useState();
    console.log(currencyName);
    useEffect(() => {
        fetch(currencyUrl)
        .then(res=>res.json())
        .then(data=>
            {
                setCurrencyName([data.base, ...Object.keys(data.rates)])
            })
    }, [])
    return (
        <div>
            <CurrencyInput currencyName={currencyName}/>
            <CurrencyInput currencyName={currencyName}/>
        </div>
    )
}
