/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: uperesito (https://sketchfab.com/uperesito)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/space-station-v-2001-a-space-odyssey-cc2f60147e3b407d833685cb2349708a
title: Space Station V (2001: A Space Odyssey)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/spaceStation.gltf')
  useFrame(() => {
    group.current.rotation.z += 0.001
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes['Mesh01_Material_#26_0'].geometry} material={materials.Material_26} />
          <mesh geometry={nodes['Mesh02_Material_#26_0'].geometry} material={materials.Material_26} />
          <mesh geometry={nodes['Mesh03_Material_#26_0'].geometry} material={materials.Material_26} />
          <mesh geometry={nodes['Mesh04_Material_#26_0'].geometry} material={materials.Material_26} />
          <mesh geometry={nodes['Mesh05_Material_#26_0'].geometry} material={materials.Material_26} />
          <mesh geometry={nodes['Mesh06_Material_#26_0'].geometry} material={materials.Material_26} />
          <mesh geometry={nodes['Mesh07_Material_#26_0'].geometry} material={materials.Material_26} />
          <mesh geometry={nodes['Mesh08_Material_#26_0'].geometry} material={materials.Material_26} />
          <mesh geometry={nodes['Mesh09_Material_#26_0'].geometry} material={materials.Material_26} />
          <mesh geometry={nodes['Mesh10_Material_#26_0'].geometry} material={materials.Material_26} />
          <mesh geometry={nodes['Object01_Material_#25_0'].geometry} material={materials.Material_25} />
          <mesh geometry={nodes['Object02_Material_#25_0'].geometry} material={materials.Material_25} />
          <mesh geometry={nodes.Blocks01_block_0.geometry} material={materials.block} />
          <mesh geometry={nodes.Blocks02_block_0.geometry} material={materials.block} />
          <mesh geometry={nodes.Blocks03_block_0.geometry} material={materials.block} />
          <mesh geometry={nodes.Blocks04_block_0.geometry} material={materials.block} />
          <mesh geometry={nodes.Cable_Brac_cable_brackets_0.geometry} material={materials.cable_brackets} />
          <mesh geometry={nodes.Cables01_cables_0.geometry} material={materials.cables} />
          <mesh geometry={nodes.Docking_Ba_Docking_bay_0.geometry} material={materials.Docking_bay} />
          <mesh geometry={nodes.Bay_Face_0_hubface_0.geometry} material={materials.hubface} />
          <mesh geometry={nodes.Bay_Face_1_hubface_0.geometry} material={materials.hubface} />
          <mesh geometry={nodes.Docking_B0_Docking_bay_0.geometry} material={materials.Docking_bay} />
          <mesh geometry={nodes.Hub_Wheel_1_0.geometry} material={materials.Wheel_1} />
          <mesh geometry={nodes.Spoke_Supp_spoke_support_0.geometry} material={materials.spoke_support} />
          <mesh geometry={nodes.Spoke01_spokes_0.geometry} material={materials.spokes} />
          <mesh geometry={nodes.Spoke02_spokes_0.geometry} material={materials.spokes} />
          <mesh geometry={nodes.Spoke03_spokes_0.geometry} material={materials.spokes} />
          <mesh geometry={nodes.Spoke04_spokes_0.geometry} material={materials.spokes} />
          <mesh geometry={nodes.Wheel_Gird_wheel_girders_0.geometry} material={materials.wheel_girders} />
          <mesh geometry={nodes.Wheel01_Wheel01_0.geometry} material={materials.Wheel01} />
          <mesh geometry={nodes.Wheel02_Wheel01_0.geometry} material={materials.Wheel01} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/spaceStation.gltf')
