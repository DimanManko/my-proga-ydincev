import React, {useState} from 'react';
import './App.css';


type FilterType = "all" | "dollar" | 'ruble'

function App() {
    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: 'd3445968686'},
        {banknote: 'dollar', nominal: 50, number: 'g346778686'},
        {banknote: 'dollar', nominal: 100, number: 'f367787788686'},
        {banknote: 'dollar', nominal: 50, number: 'v34459585686'},
        {banknote: 'dollar', nominal: 100, number: 't34456849686'},
        {banknote: 'ruble', nominal: 50, number: 'l34456849686'},
        {banknote: 'ruble', nominal: 100, number: 'e34456849686'},
        {banknote: 'ruble', nominal: 50, number: 'q34456849686'},
        {banknote: 'ruble', nominal: 100, number: 'r34456849686'}
    ])

    const [filter, setFilter] = useState<FilterType>("ruble")

    let currentMoney = money;
    if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble')
    }
    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar')
    }
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>

            <div style={{marginLeft: "35px"}}>
                <button onClick={() => onClickFilterHandler("all")}>all</button>
                <button onClick={() => onClickFilterHandler('ruble')}>ruble</button>
                <button onClick={() => onClickFilterHandler('dollar')}>dollar</button>
            </div>
        </>
    );
}

export default App;