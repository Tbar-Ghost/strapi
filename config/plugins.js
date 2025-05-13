module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true, // หรือ false ถ้าไม่ต้องการใน prod
      landingPage: true,
      depthLimit: 7,
      amountLimit: 100,
      introspection: true, // 🔥 บังคับเปิด introspection
    },
  },
});
