import React from 'react';

export default function CurrencyInput(props) {
    const {
        currencyName,
        selectedCurrency,
        onChangeCurrency
    } = props
    return (
        <div>
            <input type="number" />
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyName && currencyName.map(option =>(
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
