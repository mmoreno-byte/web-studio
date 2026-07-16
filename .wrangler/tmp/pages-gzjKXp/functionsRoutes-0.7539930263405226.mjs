import { onRequest as __whatsapp_js_onRequest } from "C:\\mmorenodev\\web-studio\\functions\\whatsapp.js"

export const routes = [
    {
      routePath: "/whatsapp",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__whatsapp_js_onRequest],
    },
  ]