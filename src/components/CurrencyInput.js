import React from 'react';

export default function CurrencyInput(props) {
    const {
        currencyName,
        selectedCurrency
    } = props
    return (
        <div>
            <input type="number" />
            <select value={selectedCurrency}>
                {currencyName && currencyName.map(option =>(
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
