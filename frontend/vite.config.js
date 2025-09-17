import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        products: resolve(__dirname, "src/pages/products.html"),
        "product-detail": resolve(__dirname, "src/pages/product-detail.html"),
        cart: resolve(__dirname, "src/pages/cart.html"),
        login: resolve(__dirname, "src/pages/login.html"),
        profile: resolve(__dirname, "src/pages/profile.html"),
      },
    },
  },
});
