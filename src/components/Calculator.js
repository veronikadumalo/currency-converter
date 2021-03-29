import React, {useEffect, useState} from 'react'
import CurrencyInput from './CurrencyInput'

const currencyUrl = 'https://api.exchangeratesapi.io/latest';

export default function Calculator() {
    const [currencyName, setCurrencyName] = useState();
    const [currencyFromValue, setCurrencyFromValue] = useState();
    const [currencyToValue, setCurrencyToValue] = useState();
    
    useEffect(() => {
        fetch(currencyUrl)
        .then(res=>res.json())
        .then(data=>
            {
                setCurrencyName([data.base, ...Object.keys(data.rates)])
                setCurrencyFromValue(data.base);
                const toCurrencyValue = Object.keys(data.rates)[0]
                setCurrencyToValue(toCurrencyValue);
            })
    }, [])
    return (
        <div>
            <CurrencyInput currencyName={currencyName}/>
            <CurrencyInput currencyName={currencyName}/>
        </div>
    )
}
