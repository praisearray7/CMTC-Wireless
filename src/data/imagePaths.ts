
// Centralized configuration for all image paths
// This allows easy management and ensures correct linking with GitHub Pages base URL

export const imagePaths = {
  // Local assets (in public folder)
  heroDevices: 'hero_devices.png',
  iphoneRepair: 'iphone_repair.png',
  logo: 'cmtc_logo.png',
  bbbAccreditation: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/uDmomXFf05qK26VIqjaa/media/68bb1597f3b9973237e8c42e.jpeg',
  homeCardRepair: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/uDmomXFf05qK26VIqjaa/media/68a4c62b034eda4197a199f0.png', // Placeholder for truncated link
  homeCardBuy: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/uDmomXFf05qK26VIqjaa/media/68a4c5c6cadb9644a567e2c1.png',
  homeCardUnlock: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/uDmomXFf05qK26VIqjaa/media/68a4c5c6cadb9644a567e2c1.png',
  aboutStore: 'store_image.png',
  
  // External placeholders
  placeholders: {
    ipad: 'https://placehold.co/300x200/f5f5f5/2C3E50?text=iPad',
    cellPhone: 'https://placehold.co/300x200/f5f5f5/2C3E50?text=Cell+Phone',
    smartWatch: 'https://placehold.co/300x200/f5f5f5/2C3E50?text=Smart+Watch',
    computer: 'https://placehold.co/300x200/f5f5f5/2C3E50?text=Computer',
    tablet: 'https://placehold.co/300x200/f5f5f5/2C3E50?text=Tablet',
  },
  
  // Home Page Carousel
  carousel: [
    'cmtc5.jpg',
    'why_book_ahead.png',
    'cmtc6.jpg',
    'cmtc2.jpg'
  ],
  // WowSlider Images
  wowSlider: [
    'wowslider/slide-1.png',
    'wowslider/slide1-1-1400x550.jpg',
    'wowslider/slide3-1-1400x550.jpg',
    'wowslider/slide2-1.jpg'
  ],

  // Specific Model Images
  modelImages: {
    'iphone-17-pro-max': 'iphone 17.jpeg',
    'iphone-17-pro': 'iphone 17.jpeg',
    'iphone-17-plus': 'iphone 17.jpeg',
    'iphone-17': 'iphone 17.jpeg', // Using existing local image for base model
    'iphone-17-air': 'iphone 17.jpeg',
    'iphone-17-slim': 'iphone 17.jpeg', // Handle potential alias
  }
};

// Helper function to resolve paths including the Base URL for deployment
export const getImagePath = (path: string) => {
  if (path.startsWith('http')) return path;
  // import.meta.env.BASE_URL is handled by Vite (is '/' in dev, '/repo/' in prod)
  return `${import.meta.env.BASE_URL}${path}`;
};
