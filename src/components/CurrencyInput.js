import React from 'react';
import style from 'styled-components';

export default function CurrencyInput(props) {
    const {
        currencyName,
        selectedCurrency,
        onChangeCurrency,
        amount,
        amountChange
    } = props

    return (
        <CurrencyRow>
            <div className={`currency-flag currency-md-flag currency-flag-${selectedCurrency ? selectedCurrency.toLowerCase() : null}`}></div>
            <input className="" type="number" value={amount} onChange={amountChange} 
            />
            <select value={selectedCurrency} onChange={onChangeCurrency} className="">
                {currencyName && currencyName.map(option =>(
                    <option
                    key={option} value={option}>{option}</option>
                    
                ))}
                
            </select>
        </CurrencyRow>
    )
}

const CurrencyRow = style.div`
background: rgba(255,255,255,0.8);
font-size: 2rem;
border: 0.1rem solid var(--mainBlue);
width: 50%;
margin: 4rem auto;
padding:1.5rem;
input, select{
    padding: 1.2rem 3rem;
    background:none;
    border:none
}

.currency-flag{
}
`