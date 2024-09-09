import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteCompression({
      // 압축 알고리즘 지정, 기본적으로는 'gzip'을 사용
      algorithm: 'gzip',
      // 압축된 파일의 확장자를 '.gz'로 설정
      ext: '.gz',
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
