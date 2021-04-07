/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const emailLocal = email;
  const n = emailLocal.lastIndexOf('@');
  const len = emailLocal.length;
  return emailLocal.slice(n + 1, len);
}

module.exports = getEmailDomain;
