import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import Numbers from './components/Numbers';

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [inputValue, setInputValue] = useState('');

    const updateInputValue = () => {};

    const handleNumberPress = (e) => {
        setInputValue(inputValue + e.target.value);
    };

    useEffect(() => {
        console.log(inputValue);
    }, [inputValue]);

    return (
        <>
            <div className="App">
                <h1>Simple Calculator</h1>
                <div className="main-container">
                    <div>{inputValue}</div>

                    <div className="numbers-container">
                        {numbers.map((number) => {
                            return (
                                <button
                                    onClick={handleNumberPress}
                                    className="numberButton"
                                    value={number}
                                    // ref={refNumber}
                                >{`${number}`}</button>
                            );
                        })}
                    </div>
                </div>
            </div>
            ;
        </>
    );
}

export default App;
