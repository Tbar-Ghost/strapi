module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'local',
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: env('GRAPHQL_PLAYGROUND', true),
      landingPage: true,
      depthLimit: 7,
      amountLimit: 100,
      introspection: env('GRAPHQL_INTROSPECTION', true), // 👈 ใช้ค่าจาก .env
    },
  },
});

