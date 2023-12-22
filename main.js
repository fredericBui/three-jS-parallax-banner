import * as THREE from 'three'

const width = window.innerWidth,
  height = 500

// init

const camera = new THREE.PerspectiveCamera(50, width / height, 0.01, 10)
camera.position.z = 1

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
const material = new THREE.MeshNormalMaterial()

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(width, height)
renderer.setAnimationLoop(animation)
renderer.setClearColor(0x000000, 0) // the default
document.getElementById('threeJSBanner').appendChild(renderer.domElement)

// animation

console.log(window.scrollY)

document.onscroll = function () {
  mesh.rotation.x = window.scrollY / 100
  mesh.rotation.y = window.scrollY / 100
}

function animation(time) {
  renderer.render(scene, camera)
}
