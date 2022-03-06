import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls';
import { light2, light3, light4 } from './direct_light.js';
import { mixer, action, action2, action3, action4, action5, action6, action7, action8, action9, action10, action11, action12, action13, action14, action15, action16, action17, gltfLoader2 } from './loader';

export const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2()


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color(0x000000);

scene.add(light2);
scene.add(light2.target);
scene.add(light3);
scene.add(light3.target);
scene.add(light4);
scene.add(light4.target);

camera.position.z = 6;
camera.position.y = 2;

const controls = new OrbitControls(camera, renderer.domElement);

controls.update();
controls.autoRotate = false;
const clock = new THREE.Clock();

renderer.domElement.addEventListener('click', onClick, false);

const animate = function () {
  requestAnimationFrame(animate);
  var delta = clock.getDelta(); // clock is an instance of THREE.Clock

  renderer.render(scene, camera);


  controls.update()
  if (mixer) mixer.update(delta);
}

let clicked=false;

function onClick(event) {
  
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children, true);
  const dispalyDetails = document.getElementsByClassName('display')[0]

  if (intersects.length > 0) {

    console.log('Intersection:', intersects[0]);
    mixer.setTime(0);
    /*if(clicked===true){
      mixer.timeScale=0
      clicked=false;
    }
    if(clicked===false){
      mixer.timeScale = 1
      clicked=true;
      //closed=true;
    }*/
    
    action.play();
    action2.play();
    action3.play();
    action4.play();
    action5.play();
    action6.play();
    action7.play();
    action8.play();
    action9.play();
    action10.play();
    action11.play();
    action12.play();
    action13.play();
    action14.play();
    action15.play();
    action16.play();
    action17.play();

    

    //const dispalyDetails = document.getElementsByClassName('display')[0];
    //dispalyDetails.style.visibility='visible'

  }

}
animate();
