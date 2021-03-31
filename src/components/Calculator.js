import React, {useEffect, useState} from 'react'
import CurrencyInput from './CurrencyInput'

const currencyUrl = 'https://api.exchangeratesapi.io/latest';

export default function Calculator() {
    const [currencyName, setCurrencyName] = useState([]);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState(1);
    const [exchangeRate, setExchangeRate ] = useState();
    const [amount, setAmount] = useState(1);
    const [amountFromCurrency, setAmountFromCurrency] = useState(true);

    let toAmount, fromAmount
    if(amountFromCurrency){
        fromAmount=amount;
        toAmount=amount*exchangeRate;
    }
    else{
        toAmount=amount;
        fromAmount=amount/exchangeRate;
    }

    useEffect(() => {   
        fetch(currencyUrl)
        .then(res=>res.json())
        .then(data=>
            {
                const toValue = Object.keys(data.rates)[19]
                console.log(data.rates)
                setCurrencyName([data.base, ...Object.keys(data.rates)])
                setFromCurrency(data.base)
                setToCurrency(toValue)
                setExchangeRate(data.rates[toValue])
                
            })
    }, [])

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
          fetch(`${currencyUrl}?base=${fromCurrency}&symbols=${toCurrency}`)
            .then(res => res.json())
            .then(data => setExchangeRate(data.rates[toCurrency]))
        }
      }, [fromCurrency, toCurrency])

    function amountFromChange (e){
        setAmount(e.target.value);
        setAmountFromCurrency(true);
    }

    function amountToChange (e){
        setAmount(e.target.value);
        setAmountFromCurrency(false);
    }

    return (
        <div>
            <CurrencyInput 
                currencyName={currencyName} 
                selectedCurrency={fromCurrency}
                onChangeCurrency={e=>setFromCurrency(e.target.value)}
                amount={fromAmount}
                amountChange={amountFromChange}/>
            <CurrencyInput 
                currencyName={currencyName} 
                selectedCurrency={toCurrency}
                onChangeCurrency={e=>setToCurrency(e.target.value)}
                amount={toAmount}
                amountChange={amountToChange}/>
        </div>
    )
}
