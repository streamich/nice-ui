export const mapLine = (x0: number, x1: number) => (y0: number, y1: number) => (x: number) =>
  ((x - x0) / (x1 - x0)) * (y1 - y0) + y0;

export const mapLineBound = (x0: number, x1: number) => (y0: number, y1: number) => {
  const mapper = mapLine(x0, x1)(y0, y1);
  return (x: number) => mapper(Math.min(x1, Math.max(x0, x)));
};
