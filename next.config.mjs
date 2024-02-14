/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack: (config) => {
        config.resolve.fallback = { fs: false }
        config.externals = ['pg', 'sqlite3', 'tedious', 'pg-hstore', 'critters']
        return config
    }
}

export default nextConfig
