let scene, camera, renderer, gltf, raycaster, mouse;
let isThreeJsInitialized = false;
const sprites = []; // Array to store sprites (replacing dots)
let zoomed = false;
let targetZoomPosition = null;
let hoveredSprite = null;
let clickedSprite = null;
let lastCameraPosition = new THREE.Vector3(0, 0, 5); 
const zoomSpeed = 0.05;

// Set camera movement limits
const cameraLimits = {
    minX: -2, 
    maxX: 2,  
    minY: -1, 
    maxY: 1,  
};

// Mouse edge movement sensitivity
const edgeThreshold = 50; 
const moveSpeed = 0.1; 

// Function to show a specific section and initialize or dispose the Three.js scene
function showSection(section) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');

    document.querySelectorAll('.bottom-bar button').forEach(button => {
        button.classList.remove('active');
    });

    document.querySelector(`.bottom-bar button[onclick="showSection('${section}')"]`).classList.add('active');

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

// Initialize Three.js scene
function initThreeJs() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-container').appendChild(renderer.domElement);

    // Lighting setup
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 0, 5);
    directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(directionalLight);

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    const loader = new THREE.GLTFLoader();
    loader.load('image/japan.glb', function (loadedGltf) {
        gltf = loadedGltf.scene;
        scene.add(gltf);

        // Add interactive image sprites (replacing dots) on the model
        addInteractiveSprites();

        camera.position.z = 5;
        isThreeJsInitialized = true;
        animate();
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error('Error loading the model:', error);
    });

    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('click', onMouseClick, false);
}

// Function to animate the 3D object
function animate() {
    if (!isThreeJsInitialized || !gltf) return;

    requestAnimationFrame(animate);

    // Smoothly move the camera towards the target zoom position
    if (targetZoomPosition) {
        camera.position.lerp(targetZoomPosition, zoomSpeed);
    }

    renderer.render(scene, camera);
}

// Function to add interactive sprites (using image texture) on the model
function addInteractiveSprites() {
    const spriteTexture = new THREE.TextureLoader().load('image/FieldTrip/Naoshima/ArtHouse/IMG_1241.jpeg'); // Your image path

    const positions = [
        { x: 1, y: 1, z: 0, id: 1 }, 
        { x: -1, y: 0.5, z: 0, id: 2 },
    ];

    positions.forEach((pos, index) => {
        const spriteMaterial = new THREE.SpriteMaterial({ map: spriteTexture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(0.3, 0.3, 0.3); // Adjust the size of the image sprite

        sprite.position.set(pos.x, pos.y, pos.z);
        sprite.name = `Sprite ${index + 1}`;
        sprite.userData.id = pos.id;
        sprites.push(sprite);
        scene.add(sprite);
    });
}

// Handle mouse movement
function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(sprites);

    if (intersects.length > 0) {
        hoveredSprite = intersects[0].object;
        if (!zoomed && !clickedSprite) {
            zoomIn(hoveredSprite);
        }
    } else {
        if (zoomed && !clickedSprite) {
            zoomOut();  
        }
        hoveredSprite = null;
    }

    handleCameraMovement(event.clientX, event.clientY);
}

// Function to move the camera when the mouse is near the edges
function handleCameraMovement(mouseX, mouseY) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (mouseX < edgeThreshold) {
        camera.position.x = Math.max(cameraLimits.minX, camera.position.x - moveSpeed);
    } else if (mouseX > windowWidth - edgeThreshold) {
        camera.position.x = Math.min(cameraLimits.maxX, camera.position.x + moveSpeed);
    }

    if (mouseY < edgeThreshold) {
        camera.position.y = Math.min(cameraLimits.maxY, camera.position.y + moveSpeed);
    } else if (mouseY > windowHeight - edgeThreshold) {
        camera.position.y = Math.max(cameraLimits.minY, camera.position.y - moveSpeed);
    }

    lastCameraPosition.copy(camera.position);
}

// Handle mouse click
function onMouseClick() {
    if (hoveredSprite) {
        clickedSprite = hoveredSprite;
        zoomIn(clickedSprite, true);
        showDetail(clickedSprite.userData.id);
    } else if (clickedSprite) {
        clickedSprite = null;
        zoomOut(); 
    }
}

// Function to zoom in when hovering over or clicking a sprite
function zoomIn(sprite, isClicked = false) {
    zoomed = true;
    const zoomDistance = isClicked ? 0.5 : 1.5;
    targetZoomPosition = new THREE.Vector3(sprite.position.x, sprite.position.y, sprite.position.z + zoomDistance);
}

// Function to zoom out when not hovering over a sprite or clicked sprite is reset
function zoomOut() {
    zoomed = false;
    targetZoomPosition = lastCameraPosition.clone(); 
}

// Function to dispose of the Three.js scene when switching away from the map section
function disposeThreeJs() {
    if (!isThreeJsInitialized) return;

    const container = document.getElementById('threejs-container');
    container.removeChild(renderer.domElement);

    scene = null;
    camera = null;
    renderer = null;
    gltf = null;
    sprites.length = 0; 
    isThreeJsInitialized = false;

    document.removeEventListener('mousemove', onMouseMove, false);
    document.removeEventListener('click', onMouseClick, false);
}

// Function to show the detail page when a sprite is clicked
function showDetail(index) {
    window.location.href = `detail-page.html?index=${index}`;
}
