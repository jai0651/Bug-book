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
  ]
};

export default nextConfig;
