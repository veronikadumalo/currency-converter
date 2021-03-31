import React from 'react';

export default function CurrencyInput(props) {
    const {
        currencyName,
        selectedCurrency,
        onChangeCurrency,
        amount,
        amountChange
    } = props

    return (
        <div className="">
            {/*<div className={`currency-flag currency-flag-${selectedCurrency ? selectedCurrency.toLowerCase() : null}`}></div>*/}
            <input className="" type="number" value={amount} onChange={amountChange} 
            />
            <select value={selectedCurrency} onChange={onChangeCurrency} className="pl-5">
                {currencyName && currencyName.map(option =>(
                    <option
                    key={option} value={option}>{option}</option>
                    
                ))}
                
            </select>
        </div>
    )
}
