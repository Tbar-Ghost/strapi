module.exports = (plugin) => {
  const originalSendEmailConfirmation = plugin.controllers.auth.forgotPassword;

  plugin.controllers.auth.forgotPassword = async (ctx) => {
    const { email } = ctx.request.body;

    const pluginStore = await strapi.store({
      environment: '',
      type: 'plugin',
      name: 'users-permissions',
    });

    const settings = await pluginStore.get({ key: 'email' });
    const resetPasswordToken = strapi.plugins['users-permissions'].services.jwt.issue({
      email,
    });

    const resetUrl = `http://localhost:3000/reset-password?code=${resetPasswordToken}`;

    await strapi.plugins['email'].services.email.send({
      to: email,
      subject: 'Reset your password',
      html: `
        <p>Hello,</p>
        <p>You requested a password reset.</p>
        <p><a href="${resetUrl}">Click here to reset your password</a></p>
      `,
    });

    ctx.send({ ok: true });
  };

  return plugin;
};
