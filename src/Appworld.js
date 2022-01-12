import React from 'react';
import './Appworld.scss';
import { Canvas } from '@react-three/fiber';
import {  Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import Plane from './Components/Plane/Plane';
import Player from './Components/Player/Player';



function Appworld() {
  return (
    <Canvas shadows sRGB>
      <Sky sunPosition={[100,20,100]}/>
      <ambientLight intensity={0.25}/>
      <pointLight castShadow intensity={0.7} position={[100,100,100]} />
      <Physics>
        <Player/>
        <Plane/>
      </Physics>
    </Canvas>
  );
}

export default Appworld;