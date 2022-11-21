import React, { useState, useEffect } from 'react';
import './App.css';
import Numbers from './components/Numbers';

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    // useEffect(() => {
    //     setNumbers();
    //     console.log(numbers);
    // });

    return (
        <>
            <div className="App">
                <h1>Hello World</h1>
                <div className="numbers-container">
                    <Numbers numbers={numbers} />
                </div>
            </div>
            ;
        </>
    );
}

export default App;
