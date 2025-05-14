module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      landingPage: true,
      depthLimit: 7,
      amountLimit: 100,
      introspection: true, // ยังต้องใส่
      apolloServer: {
        introspection: true,        // 👈 สำคัญสุด
        playground: true,
      },
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env.int('SMTP_PORT', 465),
        secure: true,
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'stampstrk@gmail.com',
        defaultReplyTo: 'stampstrk@gmail.com',
      },
    },
  },
});

console.log('NODE_ENV', process.env.NODE_ENV);