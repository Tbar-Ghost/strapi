module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            connectionString: env('DATABASE_URL')
        },
        debug: true,
        pool: { min: 0, max: 7 },
    },
    pool: {
        min: 0,
        max: 5,
    },
    acquireConnectionTimeout: 10000,
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'strapi'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', 'yourpassword'),
//       ssl: env.bool('DATABASE_SSL', false), // หรือ true ถ้าใช้ Railway / Cloud
//     },
//     pool: { min: 0, max: 7 },
//     debug: false,
//   },
// });

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//     },
//     useNullAsDefault: true,
//   },
// });
