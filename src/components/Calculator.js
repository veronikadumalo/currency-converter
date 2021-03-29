import React, {useEffect} from 'react'
import CurrencyInput from './CurrencyInput'

const currencyUrl = 'https://api.exchangeratesapi.io/latest';

export default function Calculator() {
    return (
        <div>
            <CurrencyInput />
            <CurrencyInput />
        </div>
    )
}
