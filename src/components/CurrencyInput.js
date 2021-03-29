import React from 'react';

export default function CurrencyInput(props) {
    const {
        currencyName,
        selectedCurrency
    } = props
    return (
        <div>
            <input type="number" />
            <select>
                {currencyName && currencyName.map(option =>(
                    <option key={option} value={selectedCurrency}>{option}</option>
                ))}
            </select>
        </div>
    )
}
