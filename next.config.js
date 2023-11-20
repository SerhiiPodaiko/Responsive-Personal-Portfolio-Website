/** @type {import('next').NextConfig} */
const path = require('path')

const { NEXT_MY_FULL_NAME = process.env.NEXT_MY_FULL_NAME } =
    process.env

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        })

        return config
    },
    env: {
        NEXT_MY_FULL_NAME
    },
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 'i.dummyjson.com',
    //             port: '',
    //             pathname: '/data/products/**'
    //         }
    //     ]
    // }
}

module.exports = nextConfig