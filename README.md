# Prito's Crochet - Modern React Website

A beautiful, modern, and responsive React website for a crochet business. Built with modern web technologies and featuring a complete e-commerce experience.

## 🎨 Features

### Design & UX
- **Modern Design**: Clean, professional design with beautiful gradients and animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

### E-commerce Functionality
- **Product Catalog**: Browse through various crochet products with detailed information
- **Product Filtering**: Filter by category and search functionality
- **Product Details**: Detailed product modals with image galleries and specifications
- **Shopping Cart**: Full cart functionality with quantity management
- **Responsive Product Grid**: Grid and list view options

### Pages & Components
- **Homepage**: Hero section, featured products, about preview, and call-to-action
- **Products Page**: Complete product catalog with filtering and search
- **About Page**: Company story, mission, values, and statistics
- **Contact Page**: Contact form and business information
- **Navigation**: Sticky navigation with mobile menu
- **Footer**: Comprehensive footer with links and contact info

### Technical Features
- **React 18**: Latest React features and hooks
- **React Router**: Client-side routing
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Beautiful, customizable icons
- **CSS Custom Properties**: Modern CSS with design system
- **Mobile-First**: Responsive design approach

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pritos-crochet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation component
│   ├── Footer.js       # Footer component
│   ├── ProductCard.js  # Product display card
│   ├── ProductDetail.js # Product detail modal
│   └── Cart.js         # Shopping cart component
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── Products.js     # Products page
│   ├── About.js        # About page
│   └── Contact.js      # Contact page
├── data/               # Static data
│   └── products.js     # Product data and utilities
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple (#8B5FBF) - Main brand color
- **Secondary**: Light Gray (#F7FAFC) - Background colors
- **Accent**: Red (#F56565) - Call-to-action elements
- **Text**: Dark Gray (#1A202C) - Primary text
- **Gray Scale**: Various grays for UI elements

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Responsive**: Scales appropriately across devices

### Components
- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Product cards with hover effects
- **Modals**: Product details and cart modals
- **Forms**: Contact form with validation

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🛠️ Customization

### Adding Products
Edit `src/data/products.js` to add new products:

```javascript
{
  id: 13,
  name: "New Product",
  price: 29.99,
  category: "Home Decor",
  description: "Product description",
  longDescription: "Detailed product description",
  image: "image-url",
  images: ["image-url-1", "image-url-2"],
  colors: ["Red", "Blue"],
  materials: ["Cotton"],
  dimensions: "10\" x 10\"",
  inStock: true,
  featured: false
}
```

### Styling
- Global styles are in `src/index.css`
- Component-specific styles are in separate CSS files
- CSS custom properties are used for consistent theming

### Content
- Update business information in components
- Modify contact details in Footer and Contact components
- Change company story in About page

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your repository for automatic deployment
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload build files to S3 bucket

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:
- Email: primto79@gmail.com
- Phone: +91 7099102729 

---

**Built with ❤️ for Prito's Crochet** 
