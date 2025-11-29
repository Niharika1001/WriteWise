import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Google Images
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },

      // Wikimedia
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },

      // Unsplash
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },

      // Cloudinary
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },

      // Imgur
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
        port: "",
        pathname: "/**",
      },

      // Pinterest images
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },

      // Reddit images
      {
        protocol: "https",
        hostname: "i.redd.it",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "preview.redd.it",
        port: "",
        pathname: "/**",
      },

      // Flickr
      {
        protocol: "https",
        hostname: "live.staticflickr.com",
        port: "",
        pathname: "/**",
      },

      // Freepik / Flaticon
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.flaticon.com",
        port: "",
        pathname: "/**",
      },

      // Pexels / Pixabay
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "/**",
      },

      // Instagram CDN
      {
        protocol: "https",
        hostname: "instagram.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        port: "",
        pathname: "/**",
      },

      // Twitter (X) CDN
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/**",
      },

      // GitHub images
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },

      // Medium images
      {
        protocol: "https",
        hostname: "miro.medium.com",
        port: "",
        pathname: "/**",
      },

      // Dev.to
      {
        protocol: "https",
        hostname: "dev-to-uploads.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },

      // WordPress image CDN
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.wp.com",
        port: "",
        pathname: "/**",
      },

      // Blogspot CDN
      {
        protocol: "https",
        hostname: "1.bp.blogspot.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "2.bp.blogspot.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "3.bp.blogspot.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "4.bp.blogspot.com",
        port: "",
        pathname: "/**",
      },
       {
        protocol: "https",
        hostname: "d2u1z1lopyfwlx.cloudfront.net",
        port: "",
        pathname: "/**",
      },
       {
        protocol: "https",
        hostname: "gravatar.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
