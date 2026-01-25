import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    type?: string;
    name?: string;
    image?: string;
}

const SEO = ({ title, description, canonical, type = 'website', name = 'CMTC Wireless', image = '/hero_devices.png' }: SEOProps) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title} | CMTC Wireless</title>
            <meta name='description' content={description} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* End standard metadata tags */}

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={name} />
            <meta property="og:image" content={image} />
            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {/* End Twitter tags */}
        </Helmet>
    );
};

export default SEO;
