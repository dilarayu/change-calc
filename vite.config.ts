import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VitePWA({
      manifest: {
        name: 'Rückgeldrechner',
        short_name: 'Rückgeldrechner',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        start_url: `${env.VITE_APP_DEV}?standalone=true`,
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ],
        launch_handler: {
          client_mode: 'focus-existing'
        }
      },
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: []
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
