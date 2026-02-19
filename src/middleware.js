// src/middleware.js
export function onRequest(context, next) {
    const { url } = context;
  
    // Exact match for the old URL path
    if (url.pathname === '/reunion/tables/') {
      // 301 = Permanent Redirect to the new URL
      return context.redirect('/reunion/table-de-reunion', 301);
    }

    if (url.pathname === '/reunion/rangement') {
        // 301 = Permanent Redirect to the new URL
        return context.redirect('/reunion/rangement/armoire-basse', 301);
    }
  
    // Otherwise, continue to the requested page
    return next();
  }