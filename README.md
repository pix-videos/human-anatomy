# Human Anatomy Explorer

An interactive 3D educational tool for exploring human anatomy and organ systems.

![Anatomy Explorer](https://img.shields.io/badge/Model--Viewer-3.3.0-c45c5c)
![License](https://img.shields.io/badge/License-MIT-green)

## 🫀 Overview

This web application provides an immersive way to learn about human anatomy through interactive 3D models. Users can switch between different organs using a sidebar menu and explore detailed information about each organ's structure and function.

## ✨ Features

- **Menu-Based Navigation**: Easily switch between organs using the sidebar
- **Interactive 3D Models**: Rotate, zoom, and pan to examine organs from any angle
- **Educational Content**: Comprehensive information about each organ
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Keyboard Shortcuts**: Quick navigation with number keys (1, 2, 3)

## 🧠 Organs Included

1. **Heart** (Cardiovascular System)
   - Four chambers and their functions
   - Blood flow patterns
   - Key statistics

2. **Brain** (Nervous System)
   - Major brain regions
   - Neuron and synapse information
   - Cognitive functions

3. **Lungs** (Respiratory System)
   - Gas exchange process
   - Alveoli structure
   - Breathing mechanics

## 🛠️ Technologies Used

- [Google Model-Viewer](https://modelviewer.dev/) - 3D model rendering
- HTML5, CSS3, JavaScript (Vanilla)
- Google Fonts (Cormorant Garamond, Nunito Sans)

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/human-anatomy.git
   ```

2. Open `index.html` in a modern web browser

3. Click on organs in the sidebar to explore

## 📁 Project Structure

```
human-anatomy/
├── index.html      # Main HTML file
├── styles.css      # Medical/clean themed styles
├── script.js       # Interactive functionality
└── README.md       # This file
```

## 🎨 Design

The interface features a clean, medical aesthetic with:
- Warm cream and rose color palette
- Organic background elements
- Cormorant Garamond for headings (elegant serif)
- Nunito Sans for body text (clean readability)
- Smooth transitions and hover effects

## 📝 Customization

### Adding New Organs

Add new organ data in `script.js`:

```javascript
const organData = {
    liver: {
        title: 'Human Liver',
        system: 'Digestive System',
        model: 'path/to/liver-model.glb',
        overview: 'Description...',
        stats: [...],
        functions: [...],
        anatomy: [...]
    }
};
```

### Free 3D Anatomy Model Sources

- [NIH 3D Print Exchange](https://3d.nih.gov/)
- [Sketchfab Medical Collection](https://sketchfab.com/tags/anatomy)
- [Embodi3D](https://www.embodi3d.com/)
- [TurboSquid Free Anatomy](https://www.turbosquid.com/Search/3D-Models/free/anatomy)

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| 1 | Select Heart |
| 2 | Select Brain |
| 3 | Select Lungs |
| Space | Toggle auto-rotation |

## 📄 License

MIT License - feel free to use this for educational purposes.

## 🙏 Credits

- Background Image: [Robina Weermeijer on Unsplash](https://unsplash.com/@averey) - Medical/anatomical photography
- 3D Models from [Poly Pizza](https://poly.pizza):
    - Heart: [Poly by Google](https://poly.pizza/m/8RA5hHU5gHK) (CC BY)
    - Brain: [Poly by Google](https://poly.pizza/m/5mPRPZkI3qt) (CC BY)
    - Lungs: [Poly by Google](https://poly.pizza/m/fF04IGr3X6q) - Kidneys model as anatomical placeholder (CC BY)
- Fonts: [Google Fonts](https://fonts.google.com/)
- Design inspiration: Medical textbooks and anatomical illustrations

