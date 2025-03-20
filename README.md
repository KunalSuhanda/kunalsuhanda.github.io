# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio is designed to showcase your skills, projects, and professional experience in a clean and professional manner.

## Features

- Responsive design that works on all devices
- Modern and clean user interface
- Smooth scrolling navigation
- Animated sections on scroll
- Mobile-friendly navigation menu
- Contact form
- Project showcase section
- Skills section with categories
- Social media integration

## Customization

### Personal Information
1. Open `index.html` and update the following:
   - Your name in the navigation bar and hero section
   - Your title and description in the hero section
   - Your about section text
   - Your contact information
   - Your social media links

### Projects
1. In the projects section of `index.html`, add your projects by copying and pasting the project card template:
```html
<div class="project-card">
    <div class="project-image">
        <!-- Add your project image here -->
    </div>
    <div class="project-info">
        <h3>Project Title</h3>
        <p>Project description goes here.</p>
        <div class="project-links">
            <a href="#" target="_blank"><i class="fab fa-github"></i></a>
            <a href="#" target="_blank"><i class="fas fa-external-link-alt"></i></a>
        </div>
    </div>
</div>
```

### Skills
1. Update the skills section in `index.html` with your specific skills
2. You can add or remove skill categories as needed

### Styling
1. The color scheme can be modified in `styles.css`
2. The main color is set to `#007bff` (blue) - you can change this to match your preferred color scheme
3. Font sizes and spacing can be adjusted in the CSS file

## Adding Images

1. Create an `images` folder in your project directory
2. Add your images to this folder
3. Update image paths in the HTML file to point to your images

## Contact Form

The contact form currently shows a simple alert message. To make it functional:
1. Set up a backend service (e.g., Formspree, Netlify Forms)
2. Update the form action in `index.html`
3. Modify the form submission handling in `script.js`

## Deployment

You can deploy this portfolio to various platforms:
1. GitHub Pages (free)
2. Netlify (free)
3. Vercel (free)
4. Any other web hosting service

## Maintenance

- Keep your projects section updated with your latest work
- Regularly update your skills section as you learn new technologies
- Test the website on different devices and browsers
- Keep your contact information current

## Browser Support

This portfolio is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

Feel free to fork this repository and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the MIT License. 