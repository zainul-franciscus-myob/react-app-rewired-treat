import { mapToStyles } from '@vanilla-extract/css';
import {
  borderRadiusMap,
  spacingMap,
} from '../../util/commonStyles/enums/commonEnums';
import styleObject, { mapToResponsive } from '../../util/buildStyleObject';

const borderWidthMap = {
  thin: '1px',
  thick: '2px',
  clear: 0,
};

const opacityMap = {
  xxs: 0.11,
  xs: 0.17,
  sm: 0.28,
  md: 0.5,
  lg: 0.72,
  xl: 0.83,
  xxl: 1,
  clear: 0,
};

export const alignItemsEnums = [
  'stretch',
  'center',
  'start',
  'end',
  'flex-end',
];

export const opacityEnums = Object.keys(opacityMap);
export const borderWidthEnums = Object.keys(borderWidthMap);

export const displayEnums = [
  'none',
  'block',
  'inline',
  'inline-block',
  'inline-flex',
  'flex',
];
export const verticalAlignEnums = [
  'baseline',
  'top',
  'middle',
  'bottom',
  'sub',
  'text-top',
];
export const overflowEnums = ['visible', 'hidden', 'scroll', 'auto'];
export const alignContentEnums = [
  'start',
  'center',
  'space-between',
  'space-around',
];
export const justifyContentEnums = [
  'center',
  'space-between',
  'space-around',
  'space-evenly',
  'flex-end',
  'flex-start',
];
export const flexWrapEnums = ['nowrap', 'wrap', 'wrap-reverse'];
export const flexBasisEnums = ['0', 'auto'];
export const flexDirectionEnums = [
  'row',
  'row-reverse',
  'column',
  'column-reverse',
];
export const flexEnums = ['initial', 'auto', 'none', '1'];
export const alignSelfEnums = ['stretch', 'center', 'start', 'end', 'flex-end'];
export const orderEnums = ['0', '1', '2', '3'];
export const flexGrowShrinkEnums = ['0', '1', '2', '3'];
export const positionEnums = [
  'static',
  'relative',
  'absolute',
  'sticky',
  'fixed',
];

export const borderStyleEnums = [
  'none',
  'hidden',
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',
];
export const textAlignEnums = ['left', 'right', 'center', 'justify'];

const spacingStyles = (cssProperty, map) =>
  mapToResponsive(map || spacingMap, cssProperty);

// Props currently responsive
const marginSpacingMap = { ...spacingMap, auto: 'auto' };
export const marginEnums = Object.keys(marginSpacingMap);
export const margin = spacingStyles('margin', marginSpacingMap);
export const marginTop = spacingStyles('marginTop', marginSpacingMap);
export const marginBottom = spacingStyles('marginBottom', marginSpacingMap);
export const marginRight = spacingStyles('marginRight', marginSpacingMap);
export const marginLeft = spacingStyles('marginLeft', marginSpacingMap);
export const padding = spacingStyles('padding');
export const paddingTop = spacingStyles('paddingTop');
export const paddingRight = spacingStyles('paddingRight');
export const paddingBottom = spacingStyles('paddingBottom');
export const paddingLeft = spacingStyles('paddingLeft');
export const display = mapToResponsive(displayEnums, 'display');
export const alignItems = mapToResponsive(alignItemsEnums, 'align-items');
export const alignContent = mapToResponsive(alignContentEnums, 'align-content');
export const justifyContent = mapToResponsive(
  justifyContentEnums,
  'justify-content'
);
export const flexWrap = mapToResponsive(flexWrapEnums, 'flex-wrap');
export const flexBasis = mapToResponsive(flexBasisEnums, 'flex-basis');
export const flexDirection = mapToResponsive(
  flexDirectionEnums,
  'flex-direction'
);
export const flex = mapToResponsive(flexEnums, 'flex');
export const alignSelf = mapToResponsive(alignSelfEnums, 'align-self');
export const order = mapToResponsive(orderEnums, 'order');
export const flexGrow = mapToResponsive(flexGrowShrinkEnums, 'flex-grow');
export const flexShrink = mapToResponsive(flexGrowShrinkEnums, 'flex-shrink');

// Props not currently responsive
export const position = mapToStyles(styleObject(positionEnums, 'position'));
export const verticalAlign = mapToStyles(
  styleObject(verticalAlignEnums, 'vertical-align')
);
export const overflow = mapToStyles(styleObject(overflowEnums, 'overflow'));
export const overflowX = mapToStyles(styleObject(overflowEnums, 'overflow-x'));
export const overflowY = mapToStyles(styleObject(overflowEnums, 'overflow-y'));
export const opacity = mapToStyles(styleObject(opacityMap, 'opacity'));
export const borderWidth = mapToStyles(
  styleObject(borderWidthMap, 'border-width')
);
export const borderTopWidth = mapToStyles(
  styleObject(borderWidthMap, 'border-top-width')
);
export const borderBottomWidth = mapToStyles(
  styleObject(borderWidthMap, 'border-bottom-width')
);
export const borderLeftWidth = mapToStyles(
  styleObject(borderWidthMap, 'border-left-width')
);
export const borderRightWidth = mapToStyles(
  styleObject(borderWidthMap, 'border-right-width')
);
export const borderStyle = mapToStyles(
  styleObject(borderStyleEnums, 'border-style')
);
export const borderTopStyle = mapToStyles(
  styleObject(borderStyleEnums, 'border-top-style')
);
export const borderBottomStyle = mapToStyles(
  styleObject(borderStyleEnums, 'border-bottom-style')
);
export const borderLeftStyle = mapToStyles(
  styleObject(borderStyleEnums, 'border-left-style')
);
export const borderRightStyle = mapToStyles(
  styleObject(borderStyleEnums, 'border-right-style')
);
export const borderRadius = mapToStyles(
  styleObject(borderRadiusMap, 'border-radius')
);
export const borderTopLeftRadius = mapToStyles(
  styleObject(borderRadiusMap, 'border-top-left-radius')
);
export const borderTopRightRadius = mapToStyles(
  styleObject(borderRadiusMap, 'border-top-right-radius')
);
export const borderBottomLeftRadius = mapToStyles(
  styleObject(borderRadiusMap, 'border-bottom-left-radius')
);
export const borderBottomRightRadius = mapToStyles(
  styleObject(borderRadiusMap, 'border-bottom-right-radius')
);
export const textAlign = mapToStyles(styleObject(textAlignEnums, 'text-align'));
