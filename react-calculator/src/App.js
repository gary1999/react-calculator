import React, { useState, useEffect } from 'react';
import './App.css';
// import React from 'react';
// import Input from './components/Input';
// import Numbers from './components/Numbers';

function App() {
    // const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
    const operations = ['+', '-', '*', '/'];
    const equal = ['='];

    const [inputValue, setInputValue] = useState('');
    // const [inputValueString, setInputValueString] = useState('');

    const [userInputArray, setUserInputArray] = useState([0]);
    const [operationArray, setOperationArray] = useState([]);

    const [disableOperations, setDisableOperations] = useState(false);

    const [total, setTotal] = useState(0);

    const [stringArray, setStringArray] = useState([]);
    // const [calcString, setCalcString] = useState('');

    const handleNumberClick = (e) => {
        setInputValue(inputValue + e.target.value);
        // console.log(typeof e.target.value);
    };

    const handleOperationClick = (e) => {
        setUserInputArray([...userInputArray, inputValue]);
        setOperationArray([...operationArray, e.target.value]);
        setInputValue('');
    };

    const handleEqualsClick = (e) => {
        setInputValue('');
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
        console.log(userInputArray);
    }, [userInputArray]);

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

    const handleKeyPress = (e) => {
        // console.log(typeof e.key);
        if (numbers.includes(e.key * 1)) {
            setInputValue((inputValue) => inputValue + e.key);
        } else if (operations.includes(e.key)) {
            console.log(userInputArray);
            setUserInputArray((userInputArray) => [
                ...userInputArray,
                inputValue,
            ]);
            setOperationArray((operationArray) => [...operationArray, e.key]);
            setInputValue('');
        } else {
        }
        // } else if (e.key === 'Enter') {
        //     setUserInputArray((userInputArray) => [
        //         ...userInputArray,
        //         inputValue,
        //     ]);
        //     let tempTotal = stringArray.join('');
        //     setTotal(eval(tempTotal.slice(0, -1)));
        //     setInputValue('');
        //     // console.log('enter');
        // } else {
        //     console.log('pass');
        // }
        // setInputValue(inputValue);
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <>
            <div className="App">
                <h1>Simple Calculator</h1>
                <div className="main-container">
                    {/* <div>{`: ${inputValue}`}</div> */}
                    <div>{`Current Input: ${inputValue}`}</div>
                    {/* <div>{`string: ${inputValueString} ${inputValue}`}</div> */}
                    <div>{`Current Total = ${total}`}</div>
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
                    {/* <button
                        onClick={handleEqualsClick}
                        className="operationButton"
                        value={equal}
                    >
                        {equal} 
                    </button>*/}
                    <button onClick={testButton}>test</button>
                </div>
            </div>
            ;
        </>
    );
}

export default App;
