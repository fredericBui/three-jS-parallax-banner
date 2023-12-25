import * as THREE from 'three'

import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// Personalize the height & width in CSS
var elem = document.querySelector('#threeJSItem2')
var style = getComputedStyle(elem)

// Personalize the height & width in CSS
const width = style.width.replace(/\D/g, ''),
  height = style.height.replace(/\D/g, '')

// init

const camera = new THREE.PerspectiveCamera(50, width / height, 0.01, 10)
// Change the distance of the camera
camera.position.z = 1

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2) //Change the box size
const material = new THREE.MeshNormalMaterial()

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(width, height)
renderer.setAnimationLoop(animation)
renderer.setClearColor(0x000000, 0)

// Chose the element of the DOM that will display the 3D scene
document.getElementById('threeJSItem2').appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
const loader = new GLTFLoader()

function animation(time) {
  renderer.render(scene, camera)
}
