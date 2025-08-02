/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.tsx$/,
            use: ['@svgr/webpack']
        })
        return config
    }
}

export default nextConfig
