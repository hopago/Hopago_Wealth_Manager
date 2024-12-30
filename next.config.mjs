/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
    transpilePackages: ["three"],
    webpack(config) {
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            include: [path.resolve(process.cwd(), "src/lib/three/assets")],
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "static/assets",
                        publicPath: "/_next/static/assets",
                    },
                },
            ],
        });

        return config;
    }
}

export default nextConfig;
