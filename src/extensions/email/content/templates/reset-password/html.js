module.exports = ({ user, resetPasswordToken, url }) => {
  const resetLink = `${url}/reset-password?code=${resetPasswordToken}`;
  return `
    <p>Hi ${user.username || user.email},</p>
    <p>We received a request to reset your password.</p>
    <p>Click the link below to set a new password:</p>
    <a href="${resetLink}" target="_blank" rel="noopener noreferrer">${resetLink}</a>
    <p>If you didn't request this, please ignore this email.</p>
  `;
};
