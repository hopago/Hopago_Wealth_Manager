/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
    transpilePackages: ["three"],
    webpack(config) {
        config.module.rules.push({
            test: /\.(glb|gltf)$/, // GLB/GLTF 파일 처리
            include: [path.resolve(process.cwd(), "src/lib/three/assets/3d")],
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "static/assets/3d",
                        publicPath: "/_next/static/assets/3d",
                    },
                },
            ],
        });

        return config;
    }
}

export default nextConfig;
