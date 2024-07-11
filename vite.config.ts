import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vuePlugin({
      template: {
        compilerOptions: {
          // Custom elements
          isCustomElement: tag => tag.includes('revo*'),
        },
      },
    }),
    dts({ rollupTypes: true, include: ['lib'] }),
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
        '@revolist/revogrid/loader',
      ],
      output: {
        exports: 'named',
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue',
          '@revolist/revogrid': 'Revogrid',
          '@revolist/revogrid/loader': 'RevogridLoader',
        },
      },
    },
  },
  // this is for local development
  server: {
    open: '/demo/index.html',
  },
  resolve: {
    alias: {
      '@revolist/vue3-datagrid': resolve(__dirname, './lib'),
    }
  }
});
