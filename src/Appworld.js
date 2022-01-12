import React from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import {  Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';



function App() {
  return (
    <Canvas>
      <OrbitControls/>
      <Stars/>
      <ambientLight intensity={0.5}/>
      <spotLight position={[10,15,10]} angle={0.3}/>
      <Physics>
        <Box size={[10,10,10]} invisible={true}></Box>
        {/* <Box size={[1,1,1]} invisible={false}></Box> */}
        <Plane/>
      </Physics>
    </Canvas>
  );
}

export default App;