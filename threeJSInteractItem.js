import * as THREE from 'three'

var elem = document.querySelector('#threeJSInteractItem')
var style = getComputedStyle(elem)

// Personalize the height & width in CSS
const width = style.width.replace(/\D/g, ''),
  height = style.height.replace(/\D/g, '')

// init

const camera = new THREE.PerspectiveCamera(40, width / height, 0.01, 10)
// Change the distance of the camera
camera.position.z = 0.75

const scene = new THREE.Scene()

// Personalize the lights colors & intensity
const ambientLight = new THREE.HemisphereLight('white', 'darkslategrey', 1)
ambientLight.position.set(0, 1, 0)
scene.add(ambientLight)

const mainLight = new THREE.DirectionalLight('white', 0.5)
mainLight.position.set(0, 10, 0)
scene.add(mainLight)

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2) //Change the box size
const mesh = new THREE.Mesh(geometry)
mesh.material = new THREE.MeshToonMaterial({
  color: 'white',
})
mesh.rotation.x = 0.25
scene.add(mesh)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(width, height)
renderer.setAnimationLoop(animation)
renderer.setClearColor(0x000000, 0)

// Chose the element of the DOM that will display the 3D scene
document.getElementById('threeJSInteractItem').appendChild(renderer.domElement)

var btns = document.getElementsByClassName('meshToonMaterialBtn')
for (var i = 0; i < btns.length; i++) {
  var btn = btns[i]
  btn.onclick = function (btn) {
    mesh.material = new THREE.MeshToonMaterial({
      color: btn.target.attributes.color.value,
    })
  }
}

var btns = document.getElementsByClassName('meshBasicMaterialBtn')
for (var i = 0; i < btns.length; i++) {
  var btn = btns[i]
  btn.onclick = function (btn) {
    let uvTexture = new THREE.TextureLoader().load(
      `textures/${btn.target.attributes.texture.value}.png`
    )
    mesh.material = new THREE.MeshBasicMaterial({
      map: uvTexture,
    })
  }
}

function animation(time) {
  mesh.rotation.y += 0.005
  renderer.render(scene, camera)
}
