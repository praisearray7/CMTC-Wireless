/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export for Docker/GitHub Pages compatibility
    images: {
        unoptimized: true, // Required for static export
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    // Performance optimizations
    compress: true,
    poweredByHeader: false,

    // Note: Security headers (CSP, HSTS, etc.) need to be configured at the web server level
    // when using static export mode. The async headers() function is not compatible with output: 'export'.
    // If hosting on GitHub Pages with a subpath (e.g. /CMTC-Wireless/), uncomment:
    // basePath: '/CMTC-Wireless',
    // assetPrefix: '/CMTC-Wireless/',
};

export default nextConfig;
