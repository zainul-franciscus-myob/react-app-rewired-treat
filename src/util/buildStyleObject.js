import { mapToStyles } from '@vanilla-extract/css';
import { sm, md, lg, xl } from './mixin/mediaQueries';

const styleObject = (style, cssProperty, mediaQuery) => {
  const enums = !Array.isArray(style) ? Object.keys(style) : style;
  return enums.reduce((accumulator, styleEnum) => {
    const cssValue = !Array.isArray(style) ? style[styleEnum] : styleEnum;
    accumulator[styleEnum] = mediaQuery
      ? mediaQuery(cssValue)
      : {
          [cssProperty]: cssValue,
        };
    return accumulator;
  }, {});
};

export const withMediaQuery = (style, cssProperty, screenSize) => {
  const mediaQuery = cssValue => ({
    '@media': {
      [screenSize]: {
        [`${cssProperty}`]: cssValue,
      },
    },
  });

  return styleObject(style, cssProperty, mediaQuery);
};

export const mapToResponsive = (style, cssProperty, styleConverter) => {
  const toTreatStyle = styleConverter || mapToStyles;
  const baseStyle = { base: toTreatStyle(styleObject(style, cssProperty)) };
  const mediaQueries = [
    {
      breakpoint: 'xs',
      // screen and (max-width: 499px)
      screenSize: `screen and (max-width: ${sm - 1}px)`,
    },
    {
      breakpoint: 'sm',
      // screen and (min-width: 500px) and (max-width: 767px)
      screenSize: `screen and (min-width: ${sm}px) and (max-width: ${md -
        1}px)`,
    },
    {
      breakpoint: 'md',
      // screen and (min-width: 768px) and (max-width: 991px)
      screenSize: `screen and (min-width: ${md}px) and (max-width: ${lg -
        1}px)`,
    },
    {
      breakpoint: 'lg',
      // screen and (min-width: 992px) and (max-width: 1199px)
      screenSize: `screen and (min-width: ${lg}px) and (max-width: ${xl -
        1}px)`,
    },
    {
      breakpoint: 'xl',
      // screen and (min-width: 1200px)
      screenSize: `screen and (min-width: ${xl}px)`,
    },
  ].reduce(
    (acc, val) => ({
      ...acc,
      [val.breakpoint]: toTreatStyle(
        withMediaQuery(style, cssProperty, val.screenSize)
      ),
    }),
    {}
  );

  return { ...baseStyle, ...mediaQueries };
};

export default styleObject;
