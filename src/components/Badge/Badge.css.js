import { mapToStyles } from '@vanilla-extract/css';
import {
    flxFontWeightNormal,
    flxLineHeightReset,
    flxSizeFontSizeTiny,
    flxBorderRadiusBadge,
    flxPaddingBadgeY,
    flxPaddingBadgeX,
    flxBackgroundColorBadgeDefault,
    flxBackgroundColorBadgeLightGrey,
    flxBackgroundColorBadgeGreen,
    flxBackgroundColorBadgeOrange,
    flxBackgroundColorBadgeRed,
    flxBackgroundColorBadgeBlue,
    flxBackgroundColorBadgePurple,
    flxColorBadgeDefault,
    flxColorBadgeLightGrey,
    flxColorBadgeGreen,
    flxColorBadgeOrange,
    flxColorBadgeRed,
    flxColorBadgeBlue,
    flxColorBadgePurple,
} from '../design-tokens';

// Base alert
const badge = mapToStyles({
    base: {
        minWidth: '1rem',
        padding: `${flxPaddingBadgeY} ${flxPaddingBadgeX}`,
        fontSize: flxSizeFontSizeTiny,
        fontWeight: flxFontWeightNormal,
        lineHeight: flxLineHeightReset,
        whiteSpace: 'nowrap',
        borderRadius: flxBorderRadiusBadge,
        ':empty': {
            display: 'none',
        },
    },
    default: {
        backgroundColor: flxBackgroundColorBadgeDefault,
        color: flxColorBadgeDefault,
    },
    'light-grey': {
        backgroundColor: flxBackgroundColorBadgeLightGrey,
        color: flxColorBadgeLightGrey,
    },
    green: {
        backgroundColor: flxBackgroundColorBadgeGreen,
        color: flxColorBadgeGreen,
    },
    orange: {
        backgroundColor: flxBackgroundColorBadgeOrange,
        color: flxColorBadgeOrange,
    },
    red: {
        backgroundColor: flxBackgroundColorBadgeRed,
        color: flxColorBadgeRed,
    },
    blue: {
        backgroundColor: flxBackgroundColorBadgeBlue,
        color: flxColorBadgeBlue,
    },
    purple: {
        backgroundColor: flxBackgroundColorBadgePurple,
        color: flxColorBadgePurple,
    },
});

export default badge;
