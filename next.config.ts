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
      // No Spanish virtual consultations page exists; internal links already
      // point to the English fallback with a Spanish disclosure. This redirect
      // catches external/indexed links to the old Spanish URL.
      {
        source: "/es/consultas-virtuales",
        destination: "/virtual-consultations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
