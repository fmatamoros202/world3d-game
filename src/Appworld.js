import React, { Suspense, useRef } from 'react';
import './Appworld.css';
import { Canvas } from '@react-three/fiber';
import {  Sky, OrbitControls, useGLTF } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import iphone from './objects/iphone2.gltf';
import Iphone2 from './objects/Iphone2.jsx';


import Reset from './Components/Reset/Reset';
import Instructions from './Components/Instructions/Instructions';

import Plane from './Components/Plane/Plane';
import Player from './Components/Player/Player';
import Cube from './Components/Cube/Cube';

import { useStore } from './Hooks/useStore';
import { useInterval } from './Hooks/useInterval';


function Iphone({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF(iphone)
    return (
      <group ref={group} {...props} dispose={null}>
        <group rotation={[0, -Math.PI / 2, -Math.PI / 2]} scale={[2, 1, 1]}>
          <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.005']} />
          <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.004']} />
        </group>
      </group>
    )
  }



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
                <Plane position={[0,0,0]}/>
                <Player position={[0,3,10]}/>
                {cubes.map((cube)=>( 
                    <Cube receiveShadow position={cube.pos} texture={cube.texture} args={[2,2,2]}/>
                ))}
            {/* <Suspense fallback={null}> */}
                <Iphone position={[0,7,-1]}/>
            {/* </Suspense> */}
            <Iphone2 position={[3,7,-1]}/>
            </Physics>
        </Canvas>
        <Instructions/>
    </>
  );
}

export default Appworld;