import React from 'react';
import './Appworld.css';
import { Canvas } from '@react-three/fiber';
import {  Sky, OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import Plane from './Components/Plane/Plane';
import Player from './Components/Player/Player';
import Cube from './Components/Cube/Cube';



function Appworld() {
  return (
    <Canvas shadows sRGB>
      {/* <OrbitControls/> */}
      <Sky sunPosition={[100,20,100]}/>
      <ambientLight intensity={0.25}/>
      <pointLight castShadow intensity={0.7} position={[100,100,100]} />
      <Physics gravity={[0,-30,0]}>
        <Plane position={[0,0.5,0]}/>
        <Player position={[0,3,10]}/>
        <Cube receiveShadow position={[0,5,0]} type={'woodMap'} args={[2,2,2]}/>
      </Physics>
    </Canvas>
  );
}

export default Appworld;