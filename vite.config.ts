import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  // Carregar variáveis de ambiente do arquivo .env
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      // Mapear variáveis de ambiente para o cliente
      "process.env": {
        VITE_API_URL: JSON.stringify(env.VITE_API_URL),
      },
    },
  };
});
