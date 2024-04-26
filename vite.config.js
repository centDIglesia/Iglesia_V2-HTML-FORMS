import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/Iglesia_V2-HTML-FORMS/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        gallery: resolve(__dirname, "pages/gallery/gallery.html"),
        cart: resolve(__dirname, "cart/cart.html"),
      },
    },
  },
});
