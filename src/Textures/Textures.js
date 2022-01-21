import grassImg from '../images/grass.jpeg';
import woodImg from '../images/wood-texture-box.jpeg';
import glassImg from '../images/glass.jpeg';
// import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

// export const grassMap = useLoader(TextureLoader, grassImg);
// export const woodMap = useLoader(TextureLoader,woodImg);

export const grassMap = new TextureLoader().load(grassImg);
export const woodMap = new TextureLoader().load(woodImg);
export const glassMap = new TextureLoader().load(glassImg);

