// Check for browser support of css properties
const browserSupportsChecker = cssProperty => {
  if (!cssProperty) {
    return false;
  }
  return window.CSS && window.CSS.supports
    ? window.CSS.supports(cssProperty)
    : false;
};

export default browserSupportsChecker;
