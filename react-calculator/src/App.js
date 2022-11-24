import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import Numbers from './components/Numbers';

function App() {
    // const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operations = ['+', '-', 'x', '/', '='];
    // const equal = ['='];

    const [inputValue, setInputValue] = useState('');
    const [inputValueString, setInputValueString] = useState('');

    const [userInputArray, setUserInputArray] = useState([]);

    const [operationChoice, setOperationChoice] = useState('');

    const [total, setTotal] = useState(0);

    const handleNumberClick = (e) => {
        setInputValue(inputValue + e.target.value);
    };

    const handleOperationClick = (e) => {
        setOperationChoice(e.target.value);
        setUserInputArray([...userInputArray, inputValue]);

        handleOperations();

        setInputValue('');
    };

    const handleOperations = () => {
        if (userInputArray.length < 1) {
            setTotal(inputValue * 1);
            // setTempTotal(0 + inputValue * 1);
        } else {
            setTotal(inputValue * 1);
        }
    };

    useEffect(() => {
        //Eval over here after each value has been changed?
        // console.log(inputValue);
    }, [inputValue]);

    useEffect(() => {
        console.log(operationChoice);
    }, [operationChoice]);

    // useEffect(() => {
    //     if (userInputArray.length < 1) {
    //         setTotal(0 + inputValue * 1);
    //     } else {
    //     }
    // });

    return (
        <>
            <div className="App">
                <h1>Simple Calculator</h1>
                <div className="main-container">
                    {/* <div>{`: ${inputValue}`}</div> */}
                    <div>{`string: ${inputValue}`}</div>
                    {/* <div>{`string: ${inputValueString} ${inputValue}`}</div> */}
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
                    {/* <div className="operations-container">
                        <button
                            onClick={handleEqualsClick}
                            className="operationButton"
                            value={equal}
                        >{`${equal}`}</button>
                    </div> */}
                </div>
            </div>
            ;
        </>
    );
}

export default App;
