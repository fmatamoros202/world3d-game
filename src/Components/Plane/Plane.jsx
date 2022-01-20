import React from 'react';
import { usePlane } from '@react-three/cannon';
import { TextureLoader, RepeatWrapping} from 'three';
import grass from '../../images/grass.jpeg';
import { useLoader } from '@react-three/fiber';

function Plane(props) {

    const [ref]= usePlane(()=>({rotation:[-Math.PI / 2,0,0], ...props}));
    const planeTexture = useLoader(TextureLoader, grass);
    planeTexture.wrapS = RepeatWrapping;
    planeTexture.wrapT = RepeatWrapping;
    planeTexture.repeat.set(125,125);

    return (
        <mesh ref={ref} receiveShadow >
            <planeBufferGeometry attach='geometry' args={[100,100]} />
            <meshStandardMaterial map={planeTexture} attach='material' />
        </mesh>
    );
}

export default Plane;