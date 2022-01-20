import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';


function FPScontrols() {

    const { camera, gl } = useThree();

    const controls = new PointerLockControls(camera,gl.domElement);

    useEffect(()=>{
        document.addEventListener('click', ()=>{
            controls.lock();
        })
    });

    console.log(controls);


    return (
        <>
        </>
    );
};

export default FPScontrols;
