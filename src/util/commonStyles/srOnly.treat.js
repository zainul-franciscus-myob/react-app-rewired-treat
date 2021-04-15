/* eslint-disable import/prefer-default-export */
import { style, styleMap } from 'treat';
import { screen } from '../mixin/mediaQueries';

export const overrides = styleMap({
  columns: {},
});

const commonProperties = {
  width: '1px',
  padding: 0,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  clipPath: 'polygon(0px 0px, 0px 0px, 0px 0px)',
  border: 0,
  whiteSpace: 'nowrap',
};

const hiddenProperties = {
  position: 'absolute',
  height: '1px',
  margin: '-1px 0 0 -1px',
};

export const srOnly = style({
  ...hiddenProperties,
  ...commonProperties,
});

export const invisible = style({
  ...commonProperties,
  '@media': {
    [screen.maxSm]: {
      selectors: {
        [`${overrides.columns} &`]: {
          ...hiddenProperties,
        },
      },
    },
  },
});
