export { default } from 'next-auth/middleware';

export const config = { matcher: [
    "/admin/:path*",
    // "/admin/products",
    // "/admin/new",
    // "/admin/pedidos",
] }