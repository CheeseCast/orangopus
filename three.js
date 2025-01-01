document.addEventListener('DOMContentLoaded', () => {

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Stars
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
    sizeAttenuation: true
});

const starCount = 5000;
const positions = new Float32Array(starCount * 3);
for (let i = 0; i < starCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 2000; // Spread stars around a cube of 2000x2000x2000
}

starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Mouse control variables
let mouseX = 0, mouseY = 0;

// Mouse event listener
document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update camera position based on mouse position
    const targetX = mouseX * 30; // Adjust sensitivity here
    const targetY = mouseY * 30;

    // Smooth transition to new position
    camera.position.x += (targetX - camera.position.x) * 0.1;
    camera.position.y += (targetY - camera.position.y) * 0.1;

    // Rotate the camera slightly to give a sense of movement
    camera.rotation.y = -mouseX * 0.05; // Adjust rotation sensitivity
    camera.rotation.x = -mouseY * 0.05;

    renderer.render(scene, camera);
}

animate();

// Resize handling
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);

})