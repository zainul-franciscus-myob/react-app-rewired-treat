import { style, styleMap } from 'treat';
import {
  flxHeightFieldM,
  flxFontSizeText,
  flxSpacingXLarge,
  flxLineHeightText,
  flxPaletteWhite,
  flxBorderRadiusInput,
  flxPaddingInputY,
  flxPaddingInputX,
  flxPaletteStorm50,
  flxPaletteStorm06,
  flxBackgroundColorInputError,
  flxBorderColorInputDisabled,
  flxColorInput,
  flxColorInputError,
  flxColorInputDisabled,
  flxColorInputWarning,
  flxColorInputInfo,
  flxBorderColorInputDefault,
  flxBorderColorInputFocus,
  flxBorderColorInputWarning,
  flxBorderColorInputInfo,
  flxBorderColorInputError,
  flxBorderWidthInputDefault,
  flxBorderWidthInputFocus,
  flxBorderStyleInput,
} from '../../components/design-tokens';

const overrides = styleMap({
  datepicker: {},
  searchbox: {},
});
const FormElement = style({
  display: 'block',
  font: 'inherit',
  width: '100%',
  height: flxHeightFieldM,
  fontSize: flxFontSizeText,
  lineHeight: flxLineHeightText,
  backgroundImage: 'none',
  borderWidth: flxBorderWidthInputDefault,
  borderStyle: flxBorderStyleInput,
  borderRadius: flxBorderRadiusInput,
  boxShadow: 'none',
  transition: 'border-color ease-in-out 0.15s',
  backgroundClip: 'padding-box',
  selectors: {
    '&::-moz-placeholder': {
      color: flxPaletteStorm50,
      opacity: 1,
    },
    '&:-ms-input-placeholder': {
      color: flxPaletteStorm50,
    },
    '&::-webkit-input-placeholder': {
      color: flxPaletteStorm50,
    },
    '&:focus': {
      outline: 0,
      borderWidth: flxBorderWidthInputFocus,
    },
    '&::-ms-expand': {
      border: 0,
      backgroundColor: 'transparent',
    },
  },
  // Little ie10+ hack to get the text to center
  '@media': {
    'all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
      lineHeight: 1.4,
    },
  },
});

const FormElementPadding = styleMap({
  padding: {
    padding: `${flxPaddingInputY} ${flxPaddingInputX}`,
    selectors: {
      '&:focus': {
        padding: '0.3rem 0.9rem',
      },
      [`${overrides.datepicker}:focus&`]: {
        paddingRight: `calc(${flxSpacingXLarge} - 1px)`,
      },
      [`${overrides.datepicker}&`]: {
        paddingRight: flxSpacingXLarge,
      },
      [`${overrides.searchbox}&`]: {
        paddingLeft: flxSpacingXLarge,
      },
      [`${overrides.searchbox}:focus&`]: {
        paddingLeft: `calc(${flxSpacingXLarge} - 1px)`,
      },
    },
  },
  right: {
    paddingLeft: flxSpacingXLarge,
    selectors: {
      '&:focus': {
        paddingLeft: `calc(${flxSpacingXLarge} - 1px)`,
      },
    },
  },
  left: {
    paddingRight: flxSpacingXLarge,
    selectors: {
      '&:focus': {
        paddingRight: `calc(${flxSpacingXLarge} - 1px)`,
      },
    },
  },
});

const FormElementDisabled = style({
  cursor: 'not-allowed',
});

const FormElementVariants = styleMap({
  primary: {
    selectors: {
      '&&': {
        borderColor: flxBorderColorInputDefault,
        backgroundColor: flxPaletteWhite,
        color: flxColorInput,
      },
      '&&:focus': {
        borderColor: flxBorderColorInputFocus,
      },
    },
  },
  disabled: {
    selectors: {
      '&&': {
        color: flxColorInputDisabled,
        // Way to color disabled placeholder of an input.
        '-webkit-text-fill-color': flxColorInputDisabled,
        borderColor: flxBorderColorInputDisabled,
        backgroundColor: flxPaletteStorm06,
        opacity: 1, // iOS fix for unreadable disabled content, see https://github.com/twbs/bootstrap/issues/11655
      },
      '&&:focus': {
        borderColor: flxBorderColorInputDisabled,
      },
    },
  },
  error: {
    selectors: {
      '&&': {
        color: flxColorInputError,
        backgroundColor: flxBackgroundColorInputError,
        borderColor: flxBorderColorInputError,
      },
      '&&:focus': {
        borderColor: flxBorderColorInputError,
      },
    },
  },
  warning: {
    // Only neccesary to overwrite css
    selectors: {
      '&&': {
        color: flxColorInputWarning,
        borderColor: flxBorderColorInputWarning,
        backgroundColor: flxPaletteWhite,
      },
      '&&:focus': {
        borderColor: flxBorderColorInputWarning,
      },
    },
  },
  info: {
    // Only neccesary to overwrite css
    selectors: {
      '&&': {
        color: flxColorInputInfo,
        borderColor: flxBorderColorInputInfo,
        backgroundColor: flxPaletteWhite,
      },
      '&&:focus': {
        borderColor: flxBorderColorInputInfo,
      },
    },
  },
});

const FormElementAlign = styleMap({
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
});

export const formInputGroup = style({
  display: 'flex',
});

export const formInputGroupElements = styleMap({
  removeBorderRadiusRight: {
    selectors: {
      [`${formInputGroup} &`]: {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
    },
  },
  removeBorderRadiusLeft: {
    selectors: {
      [`${formInputGroup} &`]: {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        marginLeft: '-1px',
      },
    },
  },
});

// eslint-disable-next-line import/prefer-default-export
export {
  FormElementDisabled,
  FormElement,
  FormElementVariants,
  FormElementPadding,
  FormElementAlign,
  overrides,
};
