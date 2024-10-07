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
    document.body.appendChild( renderer.domElement );
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    scene.add( directionalLight );

    const loader = new GLTFLoader();

    loader.load( 'image/japan.glb', function ( gltf ) {

        scene.add( gltf.scene );
        animate();

    }, undefined, function ( error ) {

        console.error( error );

    } );

}

// Function to animate the 3D object
function animate() {
    if (!isThreeJsInitialized) return; // Exit if Three.js is not initialized

    requestAnimationFrame(animate);
    gltf.rotation.x += 0.01;
    gltf.rotation.y += 0.01;
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
