import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls';
import { light2, light3, light4 } from './direct_light.js';
import { mixer, action, gltfLoader2 } from './loader';

export const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2()


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color( 0x000000 );

scene.add(light2);
scene.add(light2.target);
scene.add(light3);
scene.add(light3.target);
scene.add(light4);
scene.add(light4.target);

camera.position.z = 6;
camera.position.y = 2;

const controls = new OrbitControls( camera, renderer.domElement );

controls.update();
controls.autoRotate=false;
const clock= new THREE.Clock();

renderer.domElement.addEventListener('dblclick', onClick, false);

const animate = function () {
    requestAnimationFrame(animate);
    var delta = clock.getDelta(); // clock is an instance of THREE.Clock

    renderer.render(scene, camera);
    
  
    controls.update()
    if (mixer ) mixer.update( delta );
}

function onClick(event) {
    console.log('click')
    event.preventDefault();
  
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
    raycaster.setFromCamera(mouse, camera);
  
    const intersects = raycaster.intersectObjects(scene.children, true);
    const dispalyDetails = document.getElementsByClassName('display')[0]
  
    if (intersects.length > 0) {
  
      console.log('Intersection:', intersects[0]);
      
      //const dispalyDetails = document.getElementsByClassName('display')[0];
      //dispalyDetails.style.visibility='visible'
  
    }
  
  }
animate();
