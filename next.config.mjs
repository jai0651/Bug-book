import 'dotenv/config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: `/a/${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID || ''}/*`,
      },
    ],
  },
  rewrites: async () => [
    {
      source: "/hashtag/:tag",
      destination: "/search?q=%23:tag",
    },
  ],
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Externalize native modules
      config.externals.push('@node-rs/argon2');
    }
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ["@node-rs/argon2"],
  },
};

export default nextConfig;
