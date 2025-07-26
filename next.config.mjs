/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "i.ibb.co",
            },
            {
                protocol: 'https',
                hostname: "www.motorcyclevalley.com",
            },
            {
                protocol: 'https',
                hostname: "images.unsplash.com",
            },
            {
                protocol: 'https',
                hostname: "images.pexels.com",
            },
        ],
    },
};

export default nextConfig;
