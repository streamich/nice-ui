const headingScale = {};
for (let h = 1; h <= 6; h++) {
  const inv = 6 - h;
  headingScale['h' + h] = {
    fz: 1.3 ** inv + 'em',
    // letterSpacing: h - 5 + 'px',
  };
}

export const css = {
  ...headingScale,
};
