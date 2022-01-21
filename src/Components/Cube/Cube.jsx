import React, { useState } from 'react';
import { useBox } from '@react-three/cannon';
import * as textures from '../../Textures/Textures';
import { useStore } from '../../Hooks/useStore';

function Cube({position, texture, ...props}) {

    const [hover, setHover] = useState(null);
    const [addCube,removeCube,activeTexture]= useStore((state)=>[
        state.addCube,
        state.removeCube,
        state.texture,
    ]);

    const [ref] = useBox(()=>({
        type: 'Static',
        position,
        ...props,
    }));

    return (
        <mesh castShadow ref={ref} 
            onPointerMove ={(e)=>{
                e.stopPropagation();
                setHover(Math.floor(e.faceIndex /2));
            }}

            onPointerOut ={(e)=>{
                setHover(null);
            }}

            onClick={(e)=>{
                e.stopPropagation();
                const clickedFace = Math.floor(e.faceIndex / 2 );
                const { x, y, z } = ref.current.position;
                if(clickedFace === 0){
                    e.altKey ? removeCube(x,y,z) : addCube(x+2,y,z, activeTexture);
                    return;
                }
                if(clickedFace === 1){
                    e.altKey ? removeCube(x,y,z) : addCube(x-2,y,z, activeTexture);
                    return;
                }
                if(clickedFace === 2){
                    e.altKey ? removeCube(x,y,z) : addCube(x,y+2,z, activeTexture);
                    return;
                }
                if(clickedFace === 3){
                    e.altKey ? removeCube(x,y,z) : addCube(x,y-2,z, activeTexture);
                    return;
                }
                if(clickedFace === 4){
                    e.altKey ? removeCube(x,y,z) : addCube(x,y,z+2, activeTexture);
                    return;
                }
                if(clickedFace === 5){
                    e.altKey ? removeCube(x,y,z) : addCube(x,y,z-2, activeTexture);
                    return;
                }
            }}
        >
            {[...Array(6)].map((_,index)=>{
                return <meshStandardMaterial
                    attachArray='material'
                    map={textures[texture]}
                    key={index}
                    color={hover === index ? 'gray' : 'white'}
                    opacity={texture === 'glassMap' ? 0.5: 1}
                    transparent={true}
                />
            })}
            <boxBufferGeometry attach='geometry' args={props.args}/>
        </mesh>
    );
}

export default Cube;