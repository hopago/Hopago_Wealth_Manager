/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["three", "react-three-fiber", "drei"],
  webpack(config) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: "url-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "static/models/",
            publicPath: "/_next/static/models/",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
