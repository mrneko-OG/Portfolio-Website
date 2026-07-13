import * as THREE from 'three'
console.log("js works")
const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 'cyan'})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(0,0,0)

const sizes = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.y = 1
camera.position.x = 1
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
//----------------display chess.com elo---------------------
const chess_elo = fetch("https://api.chess.com/pub/player/mrneko-og/stats")
.then(response => response.json())
.then(data => document.getElementById("chess").innerHTML = data.chess_rapid.last.rating)







