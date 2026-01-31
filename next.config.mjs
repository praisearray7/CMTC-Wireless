/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@mui/material', '@mui/system', '@mui/icons-material'],
    // output: 'export', // Enable static export for Docker/GitHub Pages compatibility
    images: {
        unoptimized: true, // Required for static export
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'guide-images.cdn.ifixit.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cart-products.cdn.ifixit.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.gophermods.com',
                pathname: '/**',
            },
        ],
    },
    // Performance optimizations
    compress: true,
    poweredByHeader: false,

    // Note: Security headers (CSP, HSTS, etc.) need to be configured at the web server level
    // when using static export mode. The async headers() function is not compatible with output: 'export'.

    // GitHub Pages configuration (only when building for GitHub Pages)
    // basePath: process.env.GH_PAGES === 'true' ? '/CMTC-Wireless' : '',
    // assetPrefix: process.env.GH_PAGES === 'true' ? '/CMTC-Wireless/' : '',

    // Expose base URL to client-side code
    // env: {
    //     NEXT_PUBLIC_BASE_URL: process.env.GH_PAGES === 'true' ? '/CMTC-Wireless/' : '',
    // },
};

export default nextConfig;
