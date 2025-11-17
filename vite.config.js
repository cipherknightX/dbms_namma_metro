import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  base: "/dbms_namma_metro/",
  plugins: [react()],
});
