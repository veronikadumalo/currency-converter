import React from 'react'

export default function CurrencyInput(props) {
    const {currencyName} = props;
    return (
        <div>
            <input type="number" />
            <select>
                {currencyName.map}
                <option value="1">1</option>
            </select>
        </div>
    )
}
