export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('APP_URL'),
  proxy: { koa: true },
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    url: env('PUBLIC_ADMIN_URL', '/'),
    auth: {
      secret: env('ADMIN_JWT_SECRET', ''),
    },
  },
});
