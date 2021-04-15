const sm = 500;
const md = 768;
const lg = 992;
const xl = 1200;

const breakpointValues = {
  sm,
  md,
  lg,
  xl,
};

const breakpoints = [
  `${breakpointValues.sm}px`,
  `${breakpointValues.md}px`,
  `${breakpointValues.lg}px`,
  `${breakpointValues.xl}px`,
];
breakpoints.base = 0;
// eslint-disable-next-line prefer-destructuring
breakpoints.sm = breakpoints[0];
// eslint-disable-next-line prefer-destructuring
breakpoints.md = breakpoints[1];
// eslint-disable-next-line prefer-destructuring
breakpoints.lg = breakpoints[2];
// eslint-disable-next-line prefer-destructuring
breakpoints.xl = breakpoints[3];

const screen = {
  minSm: `(min-width: ${breakpoints.sm})`,
  minMd: `(min-width: ${breakpoints.md})`,
  minLg: `(min-width: ${breakpoints.lg})`,
  minXl: `(min-width: ${breakpoints.xl})`,
  maxSm: `(max-width: ${breakpointValues.sm - 1}px)`,
  maxMd: `(max-width: ${breakpointValues.md - 1}px)`,
  maxLg: `(max-width: ${breakpointValues.lg - 1}px)`,
  maxXl: `(max-width: ${breakpointValues.xl - 1}px)`,
};

export { sm, md, lg, xl, screen, breakpoints, breakpointValues };
