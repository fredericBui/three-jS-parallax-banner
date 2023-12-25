import * as THREE from 'three'

// Personalize the height (don't forget to change height of your banner in CSS also)
const width = window.innerWidth,
  height = 600

// init

const camera = new THREE.PerspectiveCamera(50, width / height, 0.01, 10)
// Change the distance of the camera
camera.position.z = 3

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
document.getElementById('threeJSBanner').appendChild(renderer.domElement)

// animation

// Change the scroll effect to reach what you want
document.onscroll = function () {
  camera.position.z = -window.scrollY / 120 + 3
  mesh.rotation.x = window.scrollY / 100
  mesh.rotation.y = window.scrollY / 100
}

function animation(time) {
  renderer.render(scene, camera)
}
