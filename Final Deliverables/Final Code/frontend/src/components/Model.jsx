import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const { nodes, materials } = useGLTF("/realistic_human_heart.glb");
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.17}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <group scale={286.37}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.hartZBrush_defualt_group_Heart_Tex_0.geometry}
                            material={materials.Heart_Tex}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/realistic_human_heart.glb");

export default Model;