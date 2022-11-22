import React, { useRef } from 'react';

const Numbers = (numbers, inputValue, setInputValue) => {
    // console.log(numbers);
    // console.log(inputValue);
    // console.log(setInputValue);
    // const refNumber = useRef(null);
    // console.log(refNumber);

    const handleNumberPress = (e) => {
        numbers.setInputValue(e.target.value);
        // console.log('clicked');
    };

    return (
        <>
            {numbers.numbers.map((number) => {
                return (
                    <button
                        onClick={handleNumberPress}
                        className="numberButton"
                        value={number}
                        // ref={refNumber}
                    >{`${number}`}</button>
                );
            })}
        </>
    );
};

export default Numbers;
