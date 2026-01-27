'use client';

import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    type?: string;
    name?: string;
    image?: string;
}

const SEO = ({ title, description, canonical, type = 'website', name = 'CMTC Wireless', image = '/hero_devices.png' }: SEOProps) => {
    useEffect(() => {
        document.title = title;

        // Helper to update meta tags
        const updateMeta = (name: string, content: string) => {
            let element = document.querySelector(`meta[name="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('name', name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        const updateProperty = (property: string, content: string) => {
            let element = document.querySelector(`meta[property="${property}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('property', property);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        updateMeta('description', description);
        updateProperty('og:type', type);
        updateProperty('og:title', title);
        updateProperty('og:description', description);
        updateProperty('og:site_name', name);
        updateProperty('og:image', image);
        updateMeta('twitter:card', 'summary_large_image');
        updateMeta('twitter:creator', name);
        updateMeta('twitter:title', title);
        updateMeta('twitter:description', description);

        if (canonical) {
            let link = document.querySelector('link[rel="canonical"]');
            if (!link) {
                link = document.createElement('link');
                link.setAttribute('rel', 'canonical');
                document.head.appendChild(link);
            }
            link.setAttribute('href', canonical);
        }

    }, [title, description, canonical, type, name, image]);

    return null;
};

export default SEO;
