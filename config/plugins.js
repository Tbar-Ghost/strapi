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
  //     provider: 'aws-s3',
  //     providerOptions: {
  //       s3Options: {
  //         region: env('AWS_REGION'),
  //         endpoint: `https://s3.${env('AWS_REGION')}.amazonaws.com`, // ✅ สำคัญ!
  //         credentials: {
  //           accessKeyId: env('AWS_ACCESS_KEY_ID'),
  //           secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
  //         },
  //       },
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
      s3Options: {
        credentials: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
        },
        region: env('AWS_REGION'),
      },
      params: {
        Bucket: env('AWS_BUCKET'),
        ACL: 'public-read',
      },
      baseUrl: env('AWS_S3_ENDPOINT'),
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
  // upload: {
  //   config: {
  //     provider: 'aws-s3',
  //     providerOptions: {
  //       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  //       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  //       region: process.env.AWS_REGION,
  //       endpoint: `https://s3.${env('AWS_REGION')}.amazonaws.com`,
  //       params: {
  //         Bucket: process.env.AWS_BUCKET,
  //       },
  //     },
  //   },
  // },
  'content-type-builder': {
    enabled: true
  }
});

console.log('NODE_ENV', process.env.NODE_ENV);

console.log('AWS_REGION', process.env.AWS_REGION);
console.log('AWS_ACCESS_KEY_ID', process.env.AWS_ACCESS_KEY_ID);
console.log('AWS_SECRET_ACCESS_KEY', process.env.AWS_SECRET_ACCESS_KEY);
console.log('AWS_BUCKET', process.env.AWS_BUCKET);
console.log('AWS_S3_ENDPOINT', process.env.AWS_S3_ENDPOINT);

