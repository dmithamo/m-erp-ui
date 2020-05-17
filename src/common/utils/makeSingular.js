// Yes I needed this

/**
 * @description Get the singular version of a string.
 * Necessary because it is
 * @param {string} str
 * @return {string}
 */
export default function makeSingular(str) {
  if (str === 'auth') return str;
  return str.slice(0, -1);
}
