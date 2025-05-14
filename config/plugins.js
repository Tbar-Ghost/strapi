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
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: env('SMTP_USERNAME'),  // your-email@gmail.com
          pass: env('SMTP_PASSWORD'),
        },
        secure: true,
      },
      settings: {
        defaultFrom: 'your-email@gmail.com',   // ✅ เปลี่ยนจาก no-reply@strapi.io
        defaultReplyTo: 'your-email@gmail.com',
      },
    },
  },
});

console.log('NODE_ENV', process.env.NODE_ENV);