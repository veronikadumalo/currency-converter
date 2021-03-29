import React, {useEffect, useState} from 'react'
import CurrencyInput from './CurrencyInput'

const currencyUrl = 'https://api.exchangeratesapi.io/latest';

export default function Calculator() {
    const [currencyName, setCurrencyName] = useState([]);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    console.log(toCurrency);
    useEffect(() => {
        fetch(currencyUrl)
        .then(res=>res.json())
        .then(data=>
            {
                const toValue = Object.keys(data.rates)[0]
                setCurrencyName([data.base, ...Object.keys(data.rates)])
                setFromCurrency(data.base)
                setToCurrency(toValue)
            })
    }, [])
    return (
        <div>
            <CurrencyInput currencyName={currencyName} selectedCurrency={fromCurrency}/>
            <CurrencyInput currencyName={currencyName} selectedCurrency={toCurrency}/>
        </div>
    )
}
