const skipSsrAssetProxy = process.env.SKIP_SSR_ASSET_PROXY === "true";

/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: skipSsrAssetProxy ? undefined : "/assets-path/",
};
