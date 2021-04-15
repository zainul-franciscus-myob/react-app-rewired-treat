import {
  flxSpacingXxTiny,
  flxSpacingXTiny,
  flxSpacingTiny,
  flxSpacingXSmall,
  flxSpacingSmall,
  flxSpacingMedium,
  flxSpacingLarge,
  flxSpacingXLarge,
  flxSpacingXxLarge,
  flxSizeBorderRadiusTiny,
  flxSizeBorderRadiusSmall,
  flxSizeBorderRadiusMedium,
  flxSizeBorderRadiusLarge,
  flxSizeBorderRadiusXLarge,
} from '../../../components/design-tokens';

export const borderRadiusMap = {
  xs: flxSizeBorderRadiusTiny,
  sm: flxSizeBorderRadiusSmall,
  md: flxSizeBorderRadiusMedium,
  lg: flxSizeBorderRadiusLarge,
  xl: flxSizeBorderRadiusXLarge,
  clear: 0,
};

export const spacingMap = {
  xxTiny: flxSpacingXxTiny,
  xTiny: flxSpacingXTiny,
  tiny: flxSpacingTiny,
  xs: flxSpacingXSmall,
  sm: flxSpacingSmall,
  md: flxSpacingMedium,
  lg: flxSpacingLarge,
  xl: flxSpacingXLarge,
  xxl: flxSpacingXxLarge,
  clear: 0,
};

export const borderRadiusEnums = Object.keys(borderRadiusMap);

export const spacingEnums = Object.keys(spacingMap);
