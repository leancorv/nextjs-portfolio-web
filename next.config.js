/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        fontLoaders: [
          { loader: "@next/font/google", options: { subsets: ["latin"] } },
        ],
      },
      images: {
        domains: [
          "res.cloudinary.com",
          "i.postimg.cc",
          "raw.githubusercontent.com",
        ],
      },
}

module.exports = nextConfig
