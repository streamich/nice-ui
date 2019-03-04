// Load KaTeX CSS bundle.
const loadKatexCss = () => {
  if (typeof window !== 'object') return;
  const id = 'nice-ui-katext-css-bundle';
  if (!document.getElementById(id)) {
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://unpkg.com/katex@latest/dist/katex.min.css';
    link.media = 'all';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
};

export default loadKatexCss;
