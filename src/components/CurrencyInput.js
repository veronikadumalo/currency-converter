import React from 'react';

export default function CurrencyInput(props) {
    const {currencyName} = props
    return (
        <div>
            <input type="number" />
            <select>
                {currencyName && currencyName.map(option =>(
                    <option value={option}>{option}</option>
                ))}
                
            </select>
        </div>
    )
}
