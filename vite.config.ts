import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    envDir: 'rc', 
    define: {
      __APP_ENV__: JSON.stringify(env),
    },
  };
});