import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Dice-Game/', // Replace <your-repository-name> with your GitHub repo name
});
