import { style } from '@vanilla-extract/css';
import {
  flxSpacingLarge,
  flxFontSizeText,
  flxFontFamily,
} from '../design-tokens';

export const base = style({
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: 'border-box',
  font: 'inherit',
  verticalAlign: 'baseline',
});

export const fontReset = style({
  fontSize: flxFontSizeText,
  fontFamily: flxFontFamily,
});

// HTML5 display-role reset for older browsers
const block = style({
  display: 'block',
});

// const body = style({
//   lineHeight: 1,
// });

const p = style({
  marginBottom: flxSpacingLarge,
});

const list = style({
  marginBottom: '1rem',
  listStylePosition: 'inside',
});

// const quote = style({
//   quotes: 'none',
//   selectors: {
//     '&:before, &:after': {
//       content: "''",
//     },
//   },
// });

const table = style({
  borderCollapse: 'collapse',
  borderSpacing: 0,
  backgroundColor: 'transparent',
});

const appearance = style({
  appearance: 'none',
});

const field = [block, appearance];

// // Custom reset rules
// const mark = style({
//   backgroundColor: 'transparent',
//   color: 'inherit',
// });

const textarea = [
  ...field,
  style({
    overflow: 'auto',
  }),
];

const select = [
  ...field,
  style({
    textTransform: 'none',
    selectors: {
      '&::-moz-focus-inner': {
        border: 0,
        padding: 0,
      },
      '&::-ms-expand': {
        display: 'none',
      },
      '&[multiple]': {
        height: 'auto',
      },
      '&[size]': {
        height: 'auto',
      },
    },
  }),
];

const input = [
  ...field,
  style({
    selectors: {
      '&::-ms-clear': {
        display: 'none',
      },
      '&::-webkit-search-cancel-button': {
        WebkitAppearance: 'none',
      },
      '&[disabled]': {
        cursor: 'not-allowed',
      },
      '&[type="checkbox"]': {
        boxSizing: 'border-box',
      },
      '&[type="radio"]': {
        boxSizing: 'border-box',
      },
    },
  }),
];

const button = style({
  background: 'none',
});

// const a = style({
//   color: 'inherit',
// });

export const element = {
  article: block,
  aside: block,
  details: block,
  figcaption: block,
  figure: block,
  footer: block,
  header: block,
  hgroup: block,
  menu: block,
  nav: block,
  section: block,
  ul: list,
  ol: list,
  // blockquote: quote,
  // q: quote,
  // body,
  // a,
  table,
  // mark,
  select,
  button,
  p,
  textarea,
  input,
};

// Only using button as this is the only implementation we have atm. When other elements get used they can be added.
