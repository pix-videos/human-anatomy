/**
 * Human Anatomy Explorer
 * Interactive 3D Organ Viewer
 */

// Organ data with 3D models and educational content
const organData = {
    heart: {
        title: 'Human Heart',
        system: 'Cardiovascular System',
        model: 'https://static.poly.pizza/41fe734e-c012-46bd-a95c-dbef729befec.glb', // Heart model by Poly by Google
        overview: 'The heart is a muscular organ roughly the size of a closed fist. It sits in the chest, slightly left of center, and functions as the body\'s circulatory pump. The heart beats about 100,000 times per day, pumping approximately 2,000 gallons of blood.',
        stats: [
            { value: '300g', label: 'Average Weight' },
            { value: '100k', label: 'Beats per Day' },
            { value: '5L', label: 'Blood per Minute' },
            { value: '4', label: 'Chambers' }
        ],
        functions: [
            'Pumps oxygenated blood throughout the body',
            'Returns deoxygenated blood to the lungs',
            'Maintains blood pressure',
            'Regulates circulation speed based on activity'
        ],
        anatomy: [
            { name: 'Left Ventricle', description: 'Pumps blood to the body through the aorta', color: '#e74c3c' },
            { name: 'Right Ventricle', description: 'Pumps blood to the lungs for oxygenation', color: '#3498db' },
            { name: 'Atria', description: 'Upper chambers receiving blood flow', color: '#9b59b6' }
        ]
    },
    brain: {
        title: 'Human Brain',
        system: 'Nervous System',
        model: 'https://static.poly.pizza/f16b3b74-1fdd-47a6-b7cd-cdf0d6f10058.glb', // Brain model by Poly by Google
        overview: 'The brain is the command center of the human nervous system. Weighing about 3 pounds, it contains roughly 86 billion neurons that communicate through trillions of connections called synapses. It controls thought, memory, emotion, touch, motor skills, and every process that regulates our body.',
        stats: [
            { value: '1.4kg', label: 'Average Weight' },
            { value: '86B', label: 'Neurons' },
            { value: '20%', label: 'Body Energy Use' },
            { value: '100T', label: 'Synapses' }
        ],
        functions: [
            'Processes sensory information from the body',
            'Controls voluntary and involuntary movements',
            'Regulates emotions, memory, and cognition',
            'Maintains homeostasis through the hypothalamus'
        ],
        anatomy: [
            { name: 'Cerebrum', description: 'Largest part; handles higher functions like thought and action', color: '#e91e63' },
            { name: 'Cerebellum', description: 'Coordinates voluntary movements and balance', color: '#673ab7' },
            { name: 'Brain Stem', description: 'Controls automatic functions like breathing and heart rate', color: '#2196f3' }
        ]
    },
    lungs: {
        title: 'Human Lungs',
        system: 'Respiratory System',
        model: 'https://static.poly.pizza/e30ab49f-c137-4f7e-92f5-bbf6abefa1ac.glb', // Kidneys model by Poly by Google (anatomical placeholder)
        overview: 'The lungs are a pair of spongy, air-filled organs located on either side of the chest. They are responsible for gas exchange—bringing oxygen into the body and removing carbon dioxide. The right lung is slightly larger than the left, which has to accommodate the heart.',
        stats: [
            { value: '6L', label: 'Total Capacity' },
            { value: '300M', label: 'Alveoli' },
            { value: '70m²', label: 'Surface Area' },
            { value: '22k', label: 'Breaths/Day' }
        ],
        functions: [
            'Exchanges oxygen and carbon dioxide with blood',
            'Filters small blood clots and air bubbles',
            'Helps regulate blood pH levels',
            'Provides air for speech and vocalization'
        ],
        anatomy: [
            { name: 'Bronchi', description: 'Main airways that branch into smaller bronchioles', color: '#00bcd4' },
            { name: 'Alveoli', description: 'Tiny air sacs where gas exchange occurs', color: '#ff9800' },
            { name: 'Pleura', description: 'Protective membrane surrounding each lung', color: '#8bc34a' }
        ]
    }
};

// DOM Elements
const viewer = document.getElementById('organViewer');
const organButtons = document.querySelectorAll('.organ-btn');
const titleEl = document.getElementById('organTitle');
const systemEl = document.getElementById('currentSystem');
const overviewEl = document.getElementById('organOverview');
const statsEl = document.getElementById('organStats');
const functionsEl = document.getElementById('organFunctions');
const anatomyEl = document.getElementById('organAnatomy');
const toggleRotateBtn = document.getElementById('toggleRotate');
const resetCameraBtn = document.getElementById('resetCamera');
const zoomInBtn = document.getElementById('zoomIn');
const zoomOutBtn = document.getElementById('zoomOut');

// State
let currentOrgan = 'heart';
let isRotating = true;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupOrganNavigation();
    setupViewerControls();
    loadOrgan('heart');
});

// Setup organ button navigation
function setupOrganNavigation() {
    organButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const organId = btn.dataset.organ;
            if (organId !== currentOrgan) {
                // Update active state
                organButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Load new organ
                loadOrgan(organId);
            }
        });
    });
}

// Load organ data and model
function loadOrgan(organId) {
    const data = organData[organId];
    if (!data) return;
    
    currentOrgan = organId;
    
    // Update title and system
    titleEl.textContent = data.title;
    systemEl.textContent = data.system;
    
    // Update overview
    overviewEl.textContent = data.overview;
    
    // Update stats
    statsEl.innerHTML = data.stats.map(stat => `
        <div class="stat-item">
            <span class="stat-value">${stat.value}</span>
            <span class="stat-label">${stat.label}</span>
        </div>
    `).join('');
    
    // Update functions
    functionsEl.innerHTML = data.functions.map(func => `
        <li>${func}</li>
    `).join('');
    
    // Update anatomy
    anatomyEl.innerHTML = data.anatomy.map(item => `
        <div class="anatomy-item">
            <span class="anatomy-marker" style="--color: ${item.color}"></span>
            <div class="anatomy-details">
                <strong>${item.name}</strong>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');
    
    // Load 3D model with transition
    viewer.style.opacity = '0.5';
    viewer.src = data.model;
    
    viewer.addEventListener('load', function onLoad() {
        viewer.style.opacity = '1';
        viewer.removeEventListener('load', onLoad);
    });
}

// Setup viewer toolbar controls
function setupViewerControls() {
    // Toggle rotation
    toggleRotateBtn.addEventListener('click', () => {
        isRotating = !isRotating;
        if (isRotating) {
            viewer.setAttribute('auto-rotate', '');
            toggleRotateBtn.classList.add('active');
        } else {
            viewer.removeAttribute('auto-rotate');
            toggleRotateBtn.classList.remove('active');
        }
    });
    
    // Set initial state
    toggleRotateBtn.classList.add('active');
    
    // Reset camera
    resetCameraBtn.addEventListener('click', () => {
        viewer.cameraOrbit = 'auto auto auto';
        viewer.cameraTarget = 'auto auto auto';
        viewer.fieldOfView = 'auto';
    });
    
    // Zoom controls
    let currentFov = 45;
    
    zoomInBtn.addEventListener('click', () => {
        currentFov = Math.max(10, currentFov - 10);
        viewer.fieldOfView = `${currentFov}deg`;
    });
    
    zoomOutBtn.addEventListener('click', () => {
        currentFov = Math.min(90, currentFov + 10);
        viewer.fieldOfView = `${currentFov}deg`;
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const organs = ['heart', 'brain', 'lungs'];
    const keys = ['1', '2', '3'];
    
    const index = keys.indexOf(e.key);
    if (index !== -1) {
        const organId = organs[index];
        
        // Simulate button click
        organButtons.forEach(btn => {
            if (btn.dataset.organ === organId) {
                btn.click();
            }
        });
    }
    
    // Spacebar to toggle rotation
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        toggleRotateBtn.click();
    }
});

