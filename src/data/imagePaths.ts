
// Centralized configuration for all image paths
// This allows easy management and ensures correct linking with GitHub Pages base URL

export const imagePaths = {
  // Local assets (in public folder)
  heroDevices: 'hero_devices.png',
  iphoneRepair: 'iphone_repair.png',
  logo: 'cmtc_logo.png',
  
  // External placeholders
  placeholders: {
    ipad: 'https://placehold.co/300x200/f5f5f5/2C3E50?text=iPad',
    cellPhone: 'https://placehold.co/300x200/f5f5f5/2C3E50?text=Cell+Phone',
    smartWatch: 'https://placehold.co/300x200/f5f5f5/2C3E50?text=Smart+Watch',
    computer: 'https://placehold.co/300x200/f5f5f5/2C3E50?text=Computer',
    tablet: 'https://placehold.co/300x200/f5f5f5/2C3E50?text=Tablet',
  }
};

// Helper function to resolve paths including the Base URL for deployment
export const getImagePath = (path: string) => {
  if (path.startsWith('http')) return path;
  // import.meta.env.BASE_URL is handled by Vite (is '/' in dev, '/repo/' in prod)
  return `${import.meta.env.BASE_URL}${path}`;
};
