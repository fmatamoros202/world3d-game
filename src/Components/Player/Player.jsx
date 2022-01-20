import React, {useEffect, useRef} from 'react';
import { useSphere } from '@react-three/cannon';
import { useThree, useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '../../Hooks/useKeyboardControls';
import { Vector3 } from 'three';

const SPEED = 6;

function Player(props) {

    const {moveF, moveB, moveL, moveR, jump} = useKeyboardControls();

    console.log(moveR, moveB, moveL, moveF, jump);

    const {camera} = useThree();
    const [ref, api] = useSphere(()=>({
        mass:1,
        type: 'Dynamic',
        ...props
    }));

    const velocity = useRef([0,0,0]);

    useEffect(()=>{
        api.velocity.subscribe((v)=> (velocity.current = v))
    }, [api.velocity]);

    useFrame (()=>{
        camera.position.copy(ref.current.position);
        const direction = new Vector3();
        const frontVector = new Vector3(0,0,((moveF ? 1 : 0) - (moveB ? 1:0)));
        const sideVector = new Vector3(((moveL ? 1 : 0) - (moveR ? 1:0)),0,0);

        direction.subVectors(frontVector,sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation);

        api.velocity.set(direction.x, velocity.current[1], direction.z)
    });

    return (
        <>
           <mesh ref={ref}/> 
        </>
    );
}

export default Player;