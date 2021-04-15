import { hexToRgba, rgbaToRgb } from '../index';

const splitValues = (string, sub) => {
  return string
    .substr(sub)
    .split(')')[0]
    .split(',');
};

describe('hexToRgba', () => {
  it('should return string in format', () => {
    expect(hexToRgba('#000000', 0.5)).toEqual('rgba(0,0,0,0.5)');
  });
  it('should return value 0 for red in string when supplying black hex', () => {
    const rgba = hexToRgba('#000000', 0.8);
    expect(splitValues(rgba, 5)[0]).toEqual('0');
  });
  it('should return value 0 for green in string when supplying black hex', () => {
    const rgba = hexToRgba('#000000', 0.8);
    expect(splitValues(rgba, 5)[1]).toEqual('0');
  });
  it('should return value 0 for blue in string when supplying black hex', () => {
    const rgba = hexToRgba('#000000', 0.8);
    expect(splitValues(rgba, 5)[2]).toEqual('0');
  });
  it('should return value 0 for red in string when supplying white hex', () => {
    const rgba = hexToRgba('#ffffff', 0.8);
    expect(splitValues(rgba, 5)[0]).toEqual('255');
  });
  it('should return value 0 for green in string when supplying white hex', () => {
    const rgba = hexToRgba('#ffffff', 0.8);
    expect(splitValues(rgba, 5)[1]).toEqual('255');
  });
  it('should return value 0 for blue in string when supplying white hex', () => {
    const rgba = hexToRgba('#ffffff', 0.8);
    expect(splitValues(rgba, 5)[2]).toEqual('255');
  });
  it('should return second argument and alpha value in string', () => {
    const alpha = 0.8;
    const rgba = hexToRgba('#000000', alpha);
    expect(splitValues(rgba, 5)[3]).toEqual(`${alpha}`);
  });
  it('should return alpha of 1 if alpha not supplied', () => {
    const rgba = hexToRgba('#000000');
    expect(splitValues(rgba, 5)[3]).toEqual('1');
  });
  it('should return rgb values as 0 if hex supplied with less than 6 values', () => {
    expect(hexToRgba('#000', 0.5)).toBe('rgba(0,0,0,0.5)');
  });
  it('should return rgb values as 0 if hex incorrectly supplied', () => {
    expect(hexToRgba('000000', 0.5)).toBe('rgba(0,0,0,0.5)');
  });
});
describe('rgbaToRgb', () => {
  it('should return string in format', () => {
    expect(rgbaToRgb('rgba(0,0,0,1)')).toEqual('rgb(0,0,0)');
  });
  it('should return rgb values as 0 if rgba supplied with more than 4 values', () => {
    expect(rgbaToRgb('rgba(0,0,0,1,3)')).toEqual('rgb(0,0,0)');
  });
  it('should return rgb values as 0 if rgba supplied with less than 4 values', () => {
    expect(rgbaToRgb('rgba(0,0,0)')).toEqual('rgb(0,0,0)');
  });
  it('should return same value for red, green, blue when alpha is supplied as 1', () => {
    const r = '5';
    const g = '50';
    const b = '100';
    expect(rgbaToRgb(`rgba(${r},${g},${b},1)`)).toEqual(`rgb(${r},${g},${b})`);
  });
  it('should return a calculated number based on the alpha supplied', () => {
    const red = 0;
    const alpha = 0.5;
    const calc = Math.round((1 - alpha) * 255 + alpha * red);
    expect(rgbaToRgb(`rgba(${red},0,0,${alpha})`)).toEqual(
      `rgb(${calc},128,128)`
    );
  });
});
