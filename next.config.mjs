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
        ],
    },
};

export default nextConfig;
