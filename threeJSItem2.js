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
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(20, width / height, 0.01, 200)
// Change the distance of the camera
camera.position.y = 75
camera.position.z = 70
camera.position.x = 30

// Uncomment if you need the grid helper
// const size = 100
// const divisions = 100
// const gridHelper = new THREE.GridHelper(size, divisions)
// scene.add(gridHelper)

// Personalize the light color & intensity
const mainLight = new THREE.DirectionalLight('white', 80)
mainLight.position.set(-15, 10, 10)
scene.add(mainLight)

// Personalize the lights colors & intensity
const ambientLight = new THREE.HemisphereLight('white', 'darkslategrey', 5)
ambientLight.position.set(0, 1, 0)
scene.add(ambientLight)

const loader = new GLTFLoader()

loader.load(
  'models/pb169_shoe_mid.glb',
  function (gltf) {
    let model = gltf.scene
    model.position.y = 9
    model.rotation.y = 1.3
    model.scale.set(1.3, 1.3, 1.3)
    scene.add(model)
  },
  undefined,
  function (error) {
    console.error(error)
  }
)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(width, height)
renderer.setAnimationLoop(animation)
renderer.setClearColor(0x000000, 0)

// Chose the element of the DOM that will display the 3D scene
document.getElementById('threeJSItem2').appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

function animation(time) {
  renderer.render(scene, camera)
}
