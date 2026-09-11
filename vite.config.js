import { defineConfig } from 'vite';
export default defineConfig({ build: { rollupOptions: { input: { preview: 'index.html', targets: 'targets.html', aframe: 'targets-aframe.html' } } } });
