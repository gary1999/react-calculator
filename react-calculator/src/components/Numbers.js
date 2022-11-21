import React, { useRef } from 'react';

const Numbers = (numbers) => {
    console.log(numbers);

    // const refNumber = useRef(null);
    // console.log(refNumber);

    const handleNumberPress = (e) => {
        console.log(e.target.className);
        // console.log('clicked');
    };

    return (
        <>
            {numbers.numbers.map((number) => {
                return (
                    <div
                        onClick={handleNumberPress}
                        className="numberButton"
                        // ref={refNumber}
                    >{`${number}`}</div>
                );
            })}
        </>
    );
};

export default Numbers;
