/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || ""
const hasBasePath = Boolean(basePath) && basePath !== "/"

const nextConfig = {
  // GitHub Pages は静的ホスティングのため export を利用
  output: "export",
  // GitHub Pages は `/<repo>/` 配下で公開されることが多いので末尾スラッシュを付与
  trailingSlash: true,
  // Project Pages 対応（例: https://user.github.io/repo/）
  ...(hasBasePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
}

export default nextConfig
