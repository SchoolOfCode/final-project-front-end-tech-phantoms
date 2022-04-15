/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

// };

// module.exports = nextConfig;

module.exports = {
  env: {
    NEXT_PUBLIC_EDAMAM_APP_ID: process.env.NEXT_PUBLIC_EDAMAM_APP_ID,
    NEXT_PUBLIC_EDAMAM_APP_KEY: process.env.NEXT_PUBLIC_EDAMAM_APP_KEY,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "cdn.icon-icons.com",
      "s.gravatar.com",
      "www.edamam.com",
      "www.marthastewart.com",
      "food52.com",
      "www.foodnetwork.com",
    ],
  },
};
