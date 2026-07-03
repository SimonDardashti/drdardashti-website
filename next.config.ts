import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async redirects() {
    return [
      // Educational articles were standardized to root-level URLs.
      // Preserves SEO value from the prior /articles/ subdirectory path.
      {
        source: "/articles/aquatic-therapy-arthritis",
        destination: "/aquatic-therapy-arthritis",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
