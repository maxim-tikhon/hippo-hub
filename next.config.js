/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: 'dist',
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "digitalhippo-production.up.railway.app",
			},
		],
	},
};

module.exports = nextConfig;