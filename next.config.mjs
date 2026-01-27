/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export for Docker/GitHub Pages compatibility
    images: {
        unoptimized: true, // Required for static export
    },
    // If hosting on GitHub Pages with a subpath (e.g. /CMTC-Wireless/), uncomment:
    // basePath: '/CMTC-Wireless',
    // assetPrefix: '/CMTC-Wireless/',
};

export default nextConfig;
