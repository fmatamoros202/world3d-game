import React, { useState } from 'react';
import { useBox } from '@react-three/cannon';
import * as textures from '../../Textures/Textures';

function Cube({position, type, ...props}) {

    const [hover, setHover] = useState(null);

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
        >
            {[...Array(6)].map((_,index)=>{
                return <meshStandardMaterial
                    attachArray='material'
                    map={textures[type]}
                    key={index}
                    color={hover === index ? 'gray' : 'white'}
                />
            })}
            <boxBufferGeometry attach='geometry' args={props.args}/>
        </mesh>
    );
}

export default Cube;