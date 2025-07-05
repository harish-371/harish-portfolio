# Sarah Johnson Photography Portfolio

A professional portfolio website for a wedding photographer built with React, JavaScript, and Tailwind CSS.

## Features

### Sections
- **Home Section**: Photographer's name, title (Wedding Photographer), introduction, and contact button
- **About Me Section**: Background information and technology interests
- **Portfolio Section**: Different photography categories with navigation to individual galleries
- **Experience Section**: Statistics, achievements, and professional timeline
- **Contact Section**: Contact form with email, Instagram, and WhatsApp integration
- **Footer Section**: Dark footer with copyright and navigation links

### Technical Features
- **React + JavaScript**: Built with functional components and hooks
- **Tailwind CSS**: For responsive and modern styling
- **React Router**: For navigation between portfolio categories
- **Responsive Design**: Fully responsive for mobile, tablet, desktop, and laptop
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **Smooth Scrolling**: Between sections with scroll animations
- **Background Animations**: Attractive gradient animations and floating elements
- **Image Lightbox**: Full-screen image viewer with keyboard navigation
- **Form Handling**: Contact form with validation and submission

### Photography Categories
1. **Wedding Photography** - Timeless wedding moments
2. **Engagement Sessions** - Intimate couple sessions
3. **Portrait Photography** - Professional and lifestyle portraits
4. **Special Events** - Corporate events and celebrations
5. **Family Photography** - Family moments and milestones
6. **Lifestyle Photography** - Candid lifestyle and documentary

## Installation & Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd photographer-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Header.js        # Navigation header
│   │   └── Footer.js        # Footer component
│   └── sections/
│       ├── Hero.js          # Home section
│       ├── About.js         # About me section
│       ├── Portfolio.js     # Portfolio categories
│       ├── Experience.js    # Experience and achievements
│       └── Contact.js       # Contact form and info
├── pages/
│   └── CategoryGallery.js   # Individual category galleries
├── App.js                   # Main app component
├── index.js                 # App entry point
└── index.css               # Global styles and Tailwind imports
```

## Customization

### Photographer Information
Update the following in the respective components:
- **Name**: Change "Sarah Johnson" in Header.js and other components
- **Contact Information**: Update email, phone, and location in Contact.js
- **Social Media**: Add real Instagram and social media links
- **WhatsApp**: Update phone number in Contact.js for WhatsApp integration

### Portfolio Images
- Replace placeholder images in CategoryGallery.js with actual photography
- Update image URLs in Portfolio.js for category thumbnails
- Add more categories or modify existing ones as needed

### Styling
- Modify colors in tailwind.config.js
- Update animations and effects in index.css
- Customize component styles using Tailwind classes

### SEO
- Update meta tags in public/index.html
- Modify structured data for local business information
- Add real website URL and social media handles

## Features Highlights

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface

### Performance
- Optimized images with proper sizing
- Lazy loading for better performance
- Preconnected to external domains

### User Experience
- Smooth animations and transitions
- Intuitive navigation
- Professional design aesthetic
- Fast loading times

### SEO & Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt tags for images
- Structured data for search engines
- Open Graph and Twitter Card meta tags

## Technologies Used

- **React 18**: Frontend framework
- **JavaScript (ES6+)**: Programming language
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **HTML5**: Semantic markup
- **CSS3**: Modern styling features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2024 Sarah Johnson Photography. All rights reserved.

---

Built with ❤️ using React and Tailwind CSS
