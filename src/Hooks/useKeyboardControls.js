import { useState, useEffect } from 'react';
import { useStore } from './useStore';

function actionByKey(key) {
    const keys = {
        KeyW: 'moveF',
        KeyS: 'moveB',
        KeyA: 'moveL',
        KeyD: 'moveR',
        Space: 'jump'
    };
    return keys[key];
}

function textureByKey(key) {
    const keys ={
        Digit1: 'grassMap',
        Digit2: 'woodMap',
    };
    return keys[key];
}

export const useKeyboardControls = () =>{
    const [movement, setMovement] = useState({
        moveF: false,
        moveB: false,
        moveL: false,
        moveR: false,
        jump: false
    });

    const setTexture = useStore((state)=>{
        return state.setTexture
    });


    useEffect(()=>{

        const handleKeyDown = (e)=>{
            // Movement key
            if (actionByKey(e.code)){
                setMovement((state)=> ({ ...state, [actionByKey(e.code)]: true}))
            }
            if (textureByKey(e.code)) {
                setTexture(textureByKey(e.code));
            }
        };

        const handleKeyUp = (e) =>{
            if (actionByKey(e.code)){
                setMovement((state)=>
                    ({ ...state, [actionByKey(e.code)]: false}))
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    })

    return movement;
}