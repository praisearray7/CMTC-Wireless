export interface DeviceModel {
  name: string;
  id: string;
}

export interface RepairCategory {
  id: string;
  name: string;
  title?: string; // Optional alias for name or more specific title
  shortDesc?: string;
  longDesc?: string;
  image?: string;
  priceRange?: string;
  loading?: boolean;
  icon?: any;
  category?: string;
  subCategories?: {
    name: string;
    models: DeviceModel[];
  }[]; // For nuanced categories like iPad with distinct sub-lines
  models?: DeviceModel[]; // For flat categories
}

export const navLinks = [
  { title: 'Repair Services', path: '/#repair-services', isDropdown: true },
  { title: 'Buy a Device', path: '/buy-device', isDropdown: true },
  { title: 'Warranty', path: '/warranty' },
  { title: 'Blogs', path: '/blogs' },

  { title: 'About Us', path: '/about-us' },
  { title: 'Contact Us', path: '/contact-us' },
];

export const buyServices: RepairCategory[] = [
  {
    id: 'iphone',
    name: 'iPhone',
    models: [
      { name: 'iPhone 15 Series', id: 'iphone-15-buy' }, { name: 'iPhone 14 Series', id: 'iphone-14-buy' },
      { name: 'iPhone 13 Series', id: 'iphone-13-buy' }, { name: 'Older Models', id: 'older-iphone-buy' }
    ]
  },
  {
    id: 'ipad',
    name: 'iPad',
    models: [
      { name: 'iPad Pro', id: 'ipad-pro-buy' }, { name: 'iPad Air', id: 'ipad-air-buy' },
      { name: 'iPad', id: 'ipad-buy' }, { name: 'iPad Mini', id: 'ipad-mini-buy' }
    ]
  },
  {
    id: 'android',
    name: 'Android',
    models: [
      { name: 'Samsung Galaxy', id: 'samsung-buy' }, { name: 'Google Pixel', id: 'pixel-buy' },
      { name: 'Motorola', id: 'motorola-buy' }
    ]
  },
  {
    id: 'tablet',
    name: 'Tablet',
    models: [
        { name: 'Samsung Tab', id: 'samsung-tab-buy' }, { name: 'Microsoft Surface', id: 'surface-buy' },
        { name: 'Amazon Fire', id: 'amazon-fire-buy' }
    ]
  },
  {
    id: 'smart-watch',
    name: 'Smart Watch',
    models: [
      { name: 'Apple Watch', id: 'apple-watch-buy' }, { name: 'Galaxy Watch', id: 'galaxy-watch-buy' },
      { name: 'Pixel Watch', id: 'pixel-watch-buy' }
    ]
  },
  {
    id: 'computer',
    name: 'Computer',
    models: [
       { name: 'MacBook', id: 'macbook-buy' }, { name: 'iMac', id: 'imac-buy' },
       { name: 'Windows PC', id: 'windows-pc-buy' }, { name: 'Gaming PC', id: 'gaming-pc-buy' }
    ]
  },
  {
    id: 'desktop',
    name: 'Desktop',
    models: [
        { name: 'Gaming Desktops', id: 'gaming-desktop-buy' }, { name: 'Workstations', id: 'workstation-desktop-buy' },
        { name: 'Home Office', id: 'home-office-buy' }
    ]
  },
  {
    id: 'laptop',
    name: 'Laptop',
    models: [
        { name: 'MacBook Air/Pro', id: 'macbook-laptop-buy' }, { name: 'Windows Laptops', id: 'windows-laptop-buy' },
        { name: 'Chromebooks', id: 'chromebook-buy' }
    ]
  },
  {
    id: 'all-in-one',
    name: 'All in One',
    models: [
        { name: 'iMac', id: 'imac-aio-buy' }, { name: 'HP All-in-One', id: 'hp-aio-buy' },
        { name: 'Dell All-in-One', id: 'dell-aio-buy' }
    ]
  }
];

export const repairServices: RepairCategory[] = [
  {
    id: 'iphone-repair',
    name: 'iPhone Repair',
    models: [
      { name: 'iPhone 17 Pro Max', id: 'iphone-17-pro-max' }, { name: 'iPhone 17 Pro', id: 'iphone-17-pro' }, { name: 'iPhone 17 Plus', id: 'iphone-17-plus' }, { name: 'iPhone 17 Air', id: 'iphone-17-air' }, { name: 'iPhone 17E', id: 'iphone-17e' }, { name: 'iPhone 17', id: 'iphone-17' },
      { name: 'iPhone 16 Pro Max', id: 'iphone-16-pro-max' }, { name: 'iPhone 16 Pro', id: 'iphone-16-pro' }, { name: 'iPhone 16 Plus', id: 'iphone-16-plus' }, { name: 'iPhone 16E', id: 'iphone-16e' }, { name: 'iPhone 16', id: 'iphone-16' },
      { name: 'iPhone 15 Pro Max', id: 'iphone-15-pro-max' }, { name: 'iPhone 15 Pro', id: 'iphone-15-pro' }, { name: 'iPhone 15 Plus', id: 'iphone-15-plus' }, { name: 'iPhone 15', id: 'iphone-15' },
      { name: 'iPhone 14 Pro Max', id: 'iphone-14-pro-max' }, { name: 'iPhone 14 Pro', id: 'iphone-14-pro' }, { name: 'iPhone 14 Plus', id: 'iphone-14-plus' }, { name: 'iPhone 14', id: 'iphone-14' },
      { name: 'iPhone 13 Pro Max', id: 'iphone-13-pro-max' }, { name: 'iPhone 13 Pro', id: 'iphone-13-pro' }, { name: 'iPhone 13', id: 'iphone-13' }, { name: 'iPhone 13 Mini', id: 'iphone-13-mini' },
      { name: 'iPhone 12 Pro Max', id: 'iphone-12-pro-max' }, { name: 'iPhone 12 Pro', id: 'iphone-12-pro' }, { name: 'iPhone 12', id: 'iphone-12' }, { name: 'iPhone 12 Mini', id: 'iphone-12-mini' },
      { name: 'iPhone 11 Pro Max', id: 'iphone-11-pro-max' }, { name: 'iPhone 11 Pro', id: 'iphone-11-pro' }, { name: 'iPhone 11', id: 'iphone-11' },
      { name: 'iPhone XS Max', id: 'iphone-xs-max' }, { name: 'iPhone XS', id: 'iphone-xs' }, { name: 'iPhone XR', id: 'iphone-xr' }, { name: 'iPhone X', id: 'iphone-x' },
      { name: 'iPhone SE (1st gen)', id: 'iphone-se-1' }, { name: 'iPhone SE (2nd gen)', id: 'iphone-se-2' }, { name: 'iPhone SE (3rd gen)', id: 'iphone-se-3' },
      { name: 'iPhone 8 Plus', id: 'iphone-8-plus' }, { name: 'iPhone 8', id: 'iphone-8' },
      { name: 'iPhone 7 Plus', id: 'iphone-7-plus' }, { name: 'iPhone 7', id: 'iphone-7' },
      { name: 'iPhone 6S Plus', id: 'iphone-6s-plus' }, { name: 'iPhone 6S', id: 'iphone-6s' },
      { name: 'iPhone 6 Plus', id: 'iphone-6-plus' }, { name: 'iPhone 6', id: 'iphone-6' },
      { name: 'iPhone 5S', id: 'iphone-5s' }, { name: 'iPhone 5C', id: 'iphone-5c' }, { name: 'iPhone 5', id: 'iphone-5' },
    ]
  },
  {
    id: 'ipad-repair',
    name: 'iPad Repair',
    subCategories: [
      {
        name: 'iPad',
        models: [
          { name: 'iPad (1st gen)', id: 'ipad-1' }, { name: 'iPad 2', id: 'ipad-2' }, { name: 'iPad (3rd gen)', id: 'ipad-3' }, { name: 'iPad (4th gen)', id: 'ipad-4' },
          { name: 'iPad (5th gen)', id: 'ipad-5' }, { name: 'iPad (6th gen)', id: 'ipad-6' }, { name: 'iPad (7th gen)', id: 'ipad-7' }, { name: 'iPad (8th gen)', id: 'ipad-8' },
          { name: 'iPad (9th gen)', id: 'ipad-9' }, { name: 'iPad (10th gen)', id: 'ipad-10' }, { name: 'iPad (11th gen)', id: 'ipad-11' },
        ]
      },
      {
        name: 'iPad Mini',
        models: [
          { name: 'iPad Mini (1st gen)', id: 'ipad-mini-1' }, { name: 'iPad Mini 2', id: 'ipad-mini-2' }, { name: 'iPad Mini 3', id: 'ipad-mini-3' }, { name: 'iPad Mini 4', id: 'ipad-mini-4' },
          { name: 'iPad Mini (5th gen)', id: 'ipad-mini-5' }, { name: 'iPad Mini (6th gen)', id: 'ipad-mini-6' }, { name: 'iPad Mini (7th gen)', id: 'ipad-mini-7' },
        ]
      },
      {
        name: 'iPad Air',
        models: [
            { name: 'iPad Air (1st gen)', id: 'ipad-air-1'}, { name: 'iPad Air 2', id: 'ipad-air-2'}, { name: 'iPad Air (3rd gen)', id: 'ipad-air-3'}, { name: 'iPad Air (4th gen)', id: 'ipad-air-4'},
            { name: 'iPad Air (5th gen)', id: 'ipad-air-5'}, { name: 'iPad Air (M2)', id: 'ipad-air-m2'}, { name: 'iPad Air (M3)', id: 'ipad-air-m3'}
        ]
      },
      {
        name: 'iPad Pro',
        models: [
            { name: 'iPad Pro 12.9" (1st gen)', id: 'ipad-pro-12.9-1'}, { name: 'iPad Pro 12.9" (2nd gen)', id: 'ipad-pro-12.9-2'}, { name: 'iPad Pro 12.9" (3rd gen)', id: 'ipad-pro-12.9-3'},
            { name: 'iPad Pro 12.9" (4th gen)', id: 'ipad-pro-12.9-4'}, { name: 'iPad Pro 12.9" (5th gen)', id: 'ipad-pro-12.9-5'}, { name: 'iPad Pro 12.9" (6th gen)', id: 'ipad-pro-12.9-6'},
            { name: 'iPad Pro 13" (M4)', id: 'ipad-pro-13-m4'}, { name: 'iPad Pro 13" (M5)', id: 'ipad-pro-13-m5'},
            { name: 'iPad Pro 9.7" (1st gen)', id: 'ipad-pro-9.7-1'}, { name: 'iPad Pro 10.5"', id: 'ipad-pro-10.5'}, { name: 'iPad Pro 11" (1st gen)', id: 'ipad-pro-11-1'},
            { name: 'iPad Pro 11" (2nd gen)', id: 'ipad-pro-11-2'}, { name: 'iPad Pro 11" (3rd gen)', id: 'ipad-pro-11-3'}, { name: 'iPad Pro 11" (4th gen)', id: 'ipad-pro-11-4'},
            { name: 'iPad Pro 11" (M4)', id: 'ipad-pro-11-m4'}, { name: 'iPad Pro 11" (M5)', id: 'ipad-pro-11-m5'},
        ]
      }
    ]
  },
  {
    id: 'macbook-repair',
    name: 'MacBook Repair',
    models: [
      { name: 'MacBook Air', id: 'macbook-air' }, { name: 'MacBook Pro', id: 'macbook-pro' }, { name: 'MacBook', id: 'macbook' }
    ]
  },
  {
    id: 'cell-phone-repair',
    name: 'Cell Phone Repair',
    models: [
        { name: 'Samsung', id: 'samsung' }, { name: 'Motorola', id: 'motorola' }, { name: 'LG', id: 'lg' },
        { name: 'OnePlus', id: 'oneplus' }, { name: 'Google', id: 'google' }, { name: 'Other', id: 'other' }
    ]
  },
  {
      id: 'smart-watch-repair',
      name: 'Smart Watch Repair',
      models: [
          { name: 'Apple Watch', id: 'apple-watch'}, { name: 'Galaxy Watch', id: 'galaxy-watch'}, { name: 'Pixel Watch', id: 'pixel-watch'}
      ]
  },
  {
    id: 'computer-repair',
    name: 'Computer Repair',
    models: [
        { name: 'Desktop', id: 'desktop' }, { name: 'Laptop', id: 'laptop' }, { name: 'All in One', id: 'all-in-one' }
    ]
  },
  {
      id: 'desktop-repair',
      name: 'Desktop Repair',
      models: [
          { name: 'Gaming', id: 'gaming-desktop' }, { name: 'Workstation', id: 'workstation' }, { name: 'Home/Office', id: 'home-office' }
      ]
  },
  {
      id: 'laptop-repair',
      name: 'Laptop Repair',
      models: [
           { name: 'MacBook', id: 'macbook-repair' }, { name: 'Windows Laptop', id: 'windows-laptop' }, { name: 'Chromebook', id: 'chromebook-repair' }
      ]
  },
  {
      id: 'aio-repair',
      name: 'All-In-One Repair',
      models: [
          { name: 'iMac', id: 'imac-repair' }, { name: 'HP', id: 'hp-aio' }, { name: 'Dell', id: 'dell-aio' }
      ]
  },
  {
      id: 'tablet-repair',
      name: 'Tablet Repair',
      models: [
          { name: 'iPad', id: 'ipad-link' }, { name: 'Android Tablet', id: 'android-tablet' }, { name: 'Surface', id: 'surface' }
      ]
  }
];
