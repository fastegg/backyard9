import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'lib',
        lib: {
          entry: path.resolve(__dirname, 'index.tsx'),
          name: 'BackyardApp',
          formats: ['es'],
          fileName: () => 'index.js'
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'react-router-dom', 'react-markdown', 'lucide-react'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'react-router-dom': 'ReactRouterDOM',
              'react-markdown': 'ReactMarkdown',
              'lucide-react': 'LucideReact'
            }
          }
        },
        minify: 'terser',
        cssCodeSplit: false
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify('production')
      }
    };
});
