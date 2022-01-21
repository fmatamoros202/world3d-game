import React from 'react';
import './Reset.scss';

function Reset(props) {

    const resetGame = ()=>{
        window.location.reload();
    }


    return (
        <div className='resetButton' onClick={resetGame}>
            Reset Game
        </div>
    );
}

export default Reset;