import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Đổi từ @vitejs/plugin-react-swc sang @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
