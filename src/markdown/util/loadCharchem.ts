import loadScript from 'load-script';

// const URL = 'https://unpkg.com/charchem@0.0.2/easychem.js';
const URL = 'https://unpkg.com/charchem@0.0.2/charchem.js';
let promise;

/**
 * This loads CharChem library from UNPKG. This function
 * is idempotent, you can call it any number of times.
 */
const loadCharchem = () => {
  if (!promise) {
    promise = (async () => {
      await new Promise((resolve, reject) => {
        loadScript(URL, (error, script) => {
          if (error) reject(error);
          else resolve(script);
        });
      });
      await new Promise((resolve) => {
        const wait = () => {
          if ((window as any).ChemSys) resolve();
          else setTimeout(wait, 25);
        };
        wait();
      });
    })();
  }
  return promise;
};

export default loadCharchem;
