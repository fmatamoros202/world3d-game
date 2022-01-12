import React from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import {  Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';



function App() {
  return (
    <Canvas shadows sRGB>
      <Sky sunPosition={[100,20,100]}/>
      <ambientLight intensity={0.25}/>
      <pointLight castShadow intensity={0.7} position={[100,100,100]} />
      <Physics>
        <Box size={[10,10,10]} invisible={true}></Box>
        {/* <Box size={[1,1,1]} invisible={false}></Box> */}
        <Plane/>
      </Physics>
    </Canvas>
  );
}

export default App;