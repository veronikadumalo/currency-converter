import React, {useEffect, useState} from 'react'
import CurrencyInput from './CurrencyInput'

const currencyUrl = 'https://api.exchangeratesapi.io/latest';

export default function Calculator() {
    const [currency, setCurrency] = useState();
    console.log(currency);
    useEffect(() => {
        fetch(currencyUrl)
        .then(res=>res.json())
        .then(data=>
            {
                setCurrency([data.base, ...Object.keys(data.rates)])
            })
    }, [])
    return (
        <div>
            <CurrencyInput />
            <CurrencyInput />
        </div>
    )
}
