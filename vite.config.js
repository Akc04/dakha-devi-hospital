import { defineConfig } from 'vite'

export default defineConfig({
  base: '/dakha-devi-hospital/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        appointment: './appointment.html',
      },
    },
  },
})
