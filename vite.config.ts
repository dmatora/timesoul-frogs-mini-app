import { sentryVitePlugin } from '@sentry/vite-plugin';
/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: './node_modules/.vite/vnfr-front',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    nxViteTsPaths(),
    sentryVitePlugin({
      org: 'vnfrclicker',
      project: 'vnfr-clicker-front',
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,

    commonjsOptions: {
      transformMixedEsModules: true,
    },

    sourcemap: true,
  },

  test: {
    globals: true,
    cache: {
      dir: './node_modules/.vitest/vnfr-front',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: './coverage/vnfr-front',
      provider: 'v8',
    },
  },
});
