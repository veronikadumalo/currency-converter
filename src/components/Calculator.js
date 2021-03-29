import React, {useEffect} from 'react'
import CurrencyInput from './CurrencyInput'

const currencyUrl = 'https://api.exchangeratesapi.io/latest';

export default function Calculator() {
    useEffect(() => {
        fetch(currencyUrl)
        .then(res=>res.json())
        .then(data=>console.log(data))
    }, [])
    return (
        <div>
            <CurrencyInput />
            <CurrencyInput />
        </div>
    )
}
