import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import Numbers from './components/Numbers';

function App() {
    // const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
    const operations = ['+', '-', '*', '/', '='];
    // const equal = ['='];

    const [inputValue, setInputValue] = useState('');
    const [inputValueString, setInputValueString] = useState('');

    const [userInputArray, setUserInputArray] = useState([0]);
    const [operationArray, setOperationArray] = useState([]);

    const [disableOperations, setDisableOperations] = useState(false);

    const [total, setTotal] = useState(0);

    const [stringArray, setStringArray] = useState([]);
    const [calcString, setCalcString] = useState('');

    const handleNumberClick = (e) => {
        setInputValue(inputValue + e.target.value);
    };

    const handleOperationClick = (e) => {
        setUserInputArray([...userInputArray, inputValue]);
        setOperationArray([...operationArray, e.target.value]);

        // handleOperations();

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

    const testButton = () => {
        console.log(stringArray);
    };

    useEffect(() => {
        for (let i = 0; i < userInputArray.length - 1; i++) {
            setStringArray([
                ...stringArray,
                userInputArray[i + 1],
                operationArray[i],
            ]);
        }
    }, [operationArray]);

    useEffect(() => {
        // const newArray = ['test', 'test2', 'test3'];
        // console.log(newArray.slice(0, -1));
        // console.log(newArray);
        let tempTotal = stringArray.join('');
        setTotal(eval(tempTotal.slice(0, -1)));
    }, [stringArray]);

    useEffect(() => {
        if (inputValue === '') {
            setDisableOperations(true);
        } else {
            setDisableOperations(false);
        }
    }, [inputValue]);

    return (
        <>
            <div className="App">
                <h1>Simple Calculator</h1>
                <div className="main-container">
                    {/* <div>{`: ${inputValue}`}</div> */}
                    <div>{`string: ${inputValue}`}</div>
                    {/* <div>{`string: ${inputValueString} ${inputValue}`}</div> */}
                    <div>{`= ${total}`}</div>
                    <div>{stringArray}</div>
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
                                    disabled={disableOperations}
                                >
                                    {`${operation}`}
                                </button>
                            );
                        })}
                    </div>
                    <button onClick={testButton}>test</button>
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
