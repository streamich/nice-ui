const loadScript = require('load-script');

const URL = 'https://unpkg.com/raphael@2/raphael.min.js';

/**
 * This loads Raphael.js library from UNPKG, which
 * sets it as window.Raphael global.
 */
const loadRaphael = () =>
  new Promise((resolve, reject) => {
    loadScript(URL, (error, script) => {
      if (error) reject(error);
      else resolve(script);
    });
  });

export default loadRaphael;
