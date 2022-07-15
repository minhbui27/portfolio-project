# This is the repository for my portfolio app

This project was created using NodeJs with a front end created using ReactJs

## Front-End design:
- A large part of this app was created with the help of tailwindcss.
- I wanted to create an app that uses a 3d environment, so a large part of this project was created with the help of the package @react-three/fiber, @react-three/drei, and @react-three/spring so huge shoutout to those geniuses.
- The transitions were achieved by using framer-motion with its flexible motion options.
- There is also a script that i wrote to map the current scroll of the website to the id of the components. I used this to achieve the effect of changing background of the navbar, but it could be used for many other things. I am aware of useScroll provided by framer-motion in the latest release, but I didn't want to import such a heavy hook for a small task.
- To convert 3d .gltf files found online to WebGL renderable object to be used with react-three/fiber, i used gltf-pipeline and then gltfjsx.
- The performance on mobile might be limited in my testing.
- The responsive design is still being worked on. The elements that are tagged with tailwindcss classes are responsive, but currently the approach i have to make the 3d elements responsive is to shrink them according to the viewport dimensions, since there is a Rig components that allows for small movements in the 3d environment.
- There were compatibility issues, since I left this project for a couple of months to tend to school, and I tried to fix as much as I could, but for now, the issues i know involves incompatibility with react 18 and some packages.
