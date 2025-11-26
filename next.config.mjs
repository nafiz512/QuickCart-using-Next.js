// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**", // allow all hostnames
            },
            {
                protocol: "http",
                hostname: "**", // allow all hostnames
            },
        ],
    },
};

export default nextConfig; // Use export default instead of module.exports
