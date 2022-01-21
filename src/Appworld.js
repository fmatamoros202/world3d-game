import React from 'react';
import './Appworld.css';
import { Canvas } from '@react-three/fiber';
import {  Sky, OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Reset from './Components/Reset/Reset';

import Plane from './Components/Plane/Plane';
import Player from './Components/Player/Player';
import Cube from './Components/Cube/Cube';

import { useStore } from './Hooks/useStore';
import { useInterval } from './Hooks/useInterval';



function Appworld() {
    
    //Left This section out. This saves the game

    const [cubes, saveWorld] = useStore((state)=>[
        state.cubes,
        // state.saveWorld,
    ]);

    // useInterval(()=>{
    //     saveWorld(cubes)
    //     console.log('saved')
    // }, 10000);

  return (
    <>
        <Reset />
        <Canvas shadows sRGB>
        {/* <OrbitControls/> */}
        <Sky sunPosition={[100,20,100]}/>
        <ambientLight intensity={0.25}/>
        <pointLight castShadow intensity={0.7} position={[100,100,100]} />
        <Physics gravity={[0,-30,0]}>
            <Plane position={[0,0.5,0]}/>
            <Player position={[0,3,10]}/>
            {cubes.map((cube)=>( 
                <Cube receiveShadow position={cube.pos} texture={cube.texture} args={[2,2,2]}/>
            ))}
        </Physics>
        </Canvas>
    </>
  );
}

export default Appworld;