export function onRequest(context) {
  const telefono = context.env.WHATSAPP_NUMBER; // ← Desde variable de entorno
  
  const userAgent = context.request.headers.get('User-Agent') || '';
  const esMovil = /Android|iPhone|iPad|iPod/i.test(userAgent);
  
  const destino = esMovil 
    ? `whatsapp://send?phone=${telefono}`
    : `https://wa.me/${telefono}`;
  
  return Response.redirect(destino, 302);
}