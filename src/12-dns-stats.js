/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const d = domains;
  const dnsStat = {};
  for (let i = 0; i < d.length; i++) {
    let pos = 1;
    let str = '';
    while (pos > -1) {
      const len = d[i].length;
      pos = d[i].lastIndexOf('.');
      if (pos > -1) {
        str = `${str}.${d[i].slice(pos + 1, len)}`;
        if (!dnsStat[str]) {
          dnsStat[str] = 1;
        } else { dnsStat[str]++; }
        d[i] = d[i].slice(0, pos);
      } else {
        str = `${str}.${d[i]}`;
        if (!dnsStat[str]) {
          dnsStat[str] = 1;
        } else { dnsStat[str]++; }
      }
    }
  }
  return dnsStat;
}

module.exports = getDNSStats;
