module.exports = ({ user, resetPasswordToken, url }) => {
  const resetLink = `${url}/reset-password?code=${resetPasswordToken}`;

  return `
    <p>Hello ${user.username || user.email},</p>
    <p>Click the link below to reset your password:</p>
    <a href="${resetLink}" target="_blank">${resetLink}</a>
    <p>If you did not request this, please ignore this email.</p>
  `;
};

