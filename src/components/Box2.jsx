import React, { useRef } from "react";
import {  useFrame } from "@react-three/fiber";


const Box2 = (props) => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
     
     <mesh {...props} ref={mesh}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color={"#33bbcf"} metalness={0.6} roughness={0.2}/>
     </mesh>
  );
}

export default Box2;