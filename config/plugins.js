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
        secure: true,
        auth: {
          user: env('SMTP_USER'),
          pass: env('SMTP_PASS'),
        },
      },
      settings: {
        defaultFrom: env('SMTP_USER'),
        defaultReplyTo: env('SMTP_USER'),
      },
    },
  },
  // upload: {
  //   config: {
  //     provider: '@strapi/provider-upload-aws-s3',
  //     providerOptions: {
  //       accessKeyId: env('AWS_ACCESS_KEY_ID'),
  //       secretAccessKey: env('AWS_ACCESS_SECRET'),
  //       region: env('AWS_REGION'),
  //       params: {
  //         Bucket: env('AWS_BUCKET'),
  //       },
  //     },
  //   },
  // },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET_NAME'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  'content-type-builder': {
    enabled: true
  }
});

console.log('NODE_ENV', process.env.NODE_ENV);