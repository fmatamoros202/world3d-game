import React from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sky } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';

// *********This component is to test the box on a simple plane
function Box(props){

  const [ref, api] = useBox(()=>({mass:1, position:[0,5,0]}));

  return(
    <mesh ref={ref}  onClick={()=>{api.velocity.set(0,100,0)}}>
      <boxBufferGeometry attach='geometry' args={props.size}/>
      <meshLambertMaterial attach='material' color='blue' wireframe={props.invisible}/>
    </mesh>
  )
}

// *****This component is to add a plane to interact with box
function Plane(props){

  const [ref]= usePlane(()=>({rotation: [-Math.PI/2,0,0]}))

  return(
    <mesh position={[0,0,0]} ref={ref} rotation={[-Math.PI/2,0,0]}>
      <planeBufferGeometry attach='geometry' args={[100,100]} />
      <meshLambertMaterial attach='material' color='lightgreen'/>
    </mesh>
  )
}

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
