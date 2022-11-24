import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import Numbers from './components/Numbers';

function App() {
    // const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operations = ['+', '-', 'x', '/', '='];

    const [inputValue, setInputValue] = useState('');

    const [userInput, setUserInput] = useState([]);
    const [total, setTotal] = useState(0);

    const handleNumberClick = (e) => {
        setInputValue(inputValue + e.target.value);
    };

    const handleOperationClick = (e) => {
        // console.log(e.target.value);
        if (e.target.value === '=') {
            console.log('Equals');
        } else {
            setUserInput([...userInput, inputValue]);
            if (userInput.length < 1) {
                setTotal(inputValue);
            } else {
                setTotal(total * 1 + inputValue * 1);
                // console.log(userInput.length);
                // totalOperations(userInput[0]);
            }

            //Take current userInputs and add new input into the array
        }
        setInputValue('');
    };

    const totalOperations = (userInput) => {};

    // useEffect(() => {
    //     setTotal(userInput[0]);
    // }, [total]);

    useEffect(() => {
        // console.log(inputValue);
    }, [inputValue]);

    // useEffect(() => {
    //     console.log(total);
    // }, [total]);

    useEffect(() => {
        // console.log(userInput);
    }, [userInput]);

    return (
        <>
            <div className="App">
                <h1>Simple Calculator</h1>
                <div className="main-container">
                    <div>{`: ${inputValue}`}</div>
                    <div>{`= ${total}`}</div>
                    <div className="numbers-container">
                        {numbers.map((number) => {
                            return (
                                <button
                                    onClick={handleNumberClick}
                                    className="numberButton"
                                    value={number}
                                >
                                    {`${number}`}
                                </button>
                            );
                        })}
                    </div>
                    <div className="operations-container">
                        {operations.map((operation) => {
                            return (
                                <button
                                    onClick={handleOperationClick}
                                    className="operationButton"
                                    value={operation}
                                >
                                    {`${operation}`}
                                </button>
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
