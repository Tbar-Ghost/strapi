module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,      // เปิด Playground เสมอ
      landingPage: true,           // ป้องกัน error deprecated
      depthLimit: 7,
      amountLimit: 100,
      introspection: true,         // 🔥 บังคับเปิด introspection
    },
  },
});
