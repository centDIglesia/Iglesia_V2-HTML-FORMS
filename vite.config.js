import { defineConfig } from 'vite';
import VitePluginPages from 'vite-plugin-gh-pages';

export default defineConfig({
  base: '/Iglesia_V2-HTML-FORMS/', // Set the base path for GitHub Pages
  plugins: [
    // other plugins...
    VitePluginPages(),
  ],
});
