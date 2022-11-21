import React, { useRef } from 'react';

const Numbers = (numbers) => {
    console.log(numbers);

    // const refNumber = useRef(null);
    // console.log(refNumber);

    const handleNumberPress = (e) => {
        console.log(e.target.value);
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
