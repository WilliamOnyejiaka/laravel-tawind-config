import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],

    build: {
        // entry: './resources/css/app.css',
        // outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            output: {
                // Default
                // dir: 'dist',
                // With laravel: laravel-app/public/js
                dir: "public/build/",
                entryFileNames: "app.js",
                assetFileNames: "app.css",
                chunkFileNames: "chunk.js",
                manualChunks: undefined,
            },
        },
    },
});
