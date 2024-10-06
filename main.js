import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
let scene, camera, renderer, cube;
let isThreeJsInitialized = false; // Track if the Three.js scene is initialized

function showSection(section) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');

    // Remove 'active' class from all buttons
    document.querySelectorAll('.bottom-bar button').forEach(button => {
        button.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    document.querySelector(`.bottom-bar button[onclick="showSection('${section}')"]`).classList.add('active');

    // Initialize or destroy the Three.js scene based on the section
    if (section === 'map') {
        if (!isThreeJsInitialized) {
            initThreeJs(); // Initialize the scene
        }
    } else {
        if (isThreeJsInitialized) {
            disposeThreeJs(); // Dispose of the scene
        }
    }
}

// Function to initialize the Three.js scene
function initThreeJs() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-container').appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    isThreeJsInitialized = true;

    animate(); // Start the animation loop
}

// Function to animate the 3D object
function animate() {
    if (!isThreeJsInitialized) return; // Exit if Three.js is not initialized

    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

// Function to dispose of the Three.js scene when switching away from the map section
function disposeThreeJs() {
    if (!isThreeJsInitialized) return;

    // Remove the renderer's canvas
    const container = document.getElementById('threejs-container');
    container.removeChild(renderer.domElement);

    // Clean up Three.js objects
    scene = null;
    camera = null;
    renderer = null;
    cube = null;
    isThreeJsInitialized = false;
}

// Function to show the detail page when a map dot is clicked
function showDetail(index) {
    window.location.href = `detail-page.html?index=${index}`;
}

const loader = new GLTFLoader();

loader.load( 'image/uploads_files_848695_japan+3d+1.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );