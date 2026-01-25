import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    server: {
      middlewareMode: false,
    },
    plugins: [
      {
        name: "whitepaper-redirect",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === "/whitepaper" || req.url === "/whitepaper/") {
              res.writeHead(302, { Location: "/whitepaper.pdf" });
              res.end();
              return;
            }
            next();
          });
        },
      },
    ],
  };
});
