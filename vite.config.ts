import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Custom elements
          isCustomElement: tag => tag.includes('revo*'),
        },
      },
    }),
    vueJsx({
      pragma: 'h', // h is requied by @revolist/revogrid to support tsx syntax
    }),
    dts({ include: ['lib'] }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'), // Library entry file
      name: 'Vue3Datagrid',
    },
    rollupOptions: {
      input: {
        main: 'lib/index.ts',
      },
      external: [
        'vue',
        /node_modules/,
        /@revolist\/revogrid/,
      ],
      output: {
        exports: 'named',
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  server: {
    open: '/demo/index.html',
  },
  resolve: {
    alias: {
      '@revolist/vue3-datagrid': resolve(__dirname, './lib'),
    }
  }
});
