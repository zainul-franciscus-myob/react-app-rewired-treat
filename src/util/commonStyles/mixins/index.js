const hexToRgba = (h, a) => {
  let alpha = 1;
  let r = 0;
  let g = 0;
  let b = 0;

  if (a) {
    alpha = a;
  }

  if (h && h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }

  return `rgba(${+r},${+g},${+b},${alpha})`;
};

const rgbaToRgb = rgba => {
  const rgbaValues = rgba
    .substr(5)
    .split(')')[0]
    .split(',');

  let r = 0;
  let g = 0;
  let b = 0;

  if (rgbaValues.length === 4) {
    const rVal = rgbaValues[0];
    const gVal = rgbaValues[1];
    const bVal = rgbaValues[2];
    const aVal = rgbaValues[3];
    r = Math.round((1 - aVal) * 255 + aVal * rVal);
    g = Math.round((1 - aVal) * 255 + aVal * gVal);
    b = Math.round((1 - aVal) * 255 + aVal * bVal);
  }
  return `rgb(${r},${g},${b})`;
};

export { hexToRgba, rgbaToRgb };
