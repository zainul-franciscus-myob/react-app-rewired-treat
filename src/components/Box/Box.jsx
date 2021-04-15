/* eslint-disable react/require-default-props */
import { createElement, forwardRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as resetStyles from './BoxReset.css';
import * as styles from './Box.css';
import {
  borderRadiusEnums,
  spacingEnums,
} from '../../util/commonStyles/enums/commonEnums';

export const parseResponsiveProp = ({ base, xs, sm, md, lg, xl }, prop) => {
  if (!Array.isArray(prop)) return base[prop];
  return classnames({
    [xs[prop[0]]]: prop[0],
    [sm[prop[1]]]: prop[1],
    [md[prop[2]]]: prop[2],
    [lg[prop[3]]]: prop[3],
    [xl[prop[4]]]: prop[4],
  });
};

/**
 * Box
 *
 * @visibleName
 * @see Added: v6.0.0, Last updated: v6.8.0
 */
const Box = forwardRef(
  (
    {
      as,
      children,
      margin,
      marginTop,
      marginLeft,
      marginRight,
      marginBottom,
      padding,
      paddingTop,
      paddingRight,
      paddingLeft,
      paddingBottom,
      display,
      width,
      maxWidth,
      minWidth,
      height,
      maxHeight,
      minHeight,
      verticalAlign,
      overflow,
      overflowX,
      overflowY,
      alignItems,
      alignContent,
      justifyContent,
      flexWrap,
      flexBasis,
      flexDirection,
      flex,
      alignSelf,
      order,
      flexGrow,
      flexShrink,
      color,
      backgroundColor,
      opacity,
      zIndex,
      top,
      right,
      left,
      bottom,
      position,
      borderWidth,
      borderTopWidth,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      borderStyle,
      borderTopStyle,
      borderBottomStyle,
      borderLeftStyle,
      borderRightStyle,
      borderColor,
      borderTopColor,
      borderBottomColor,
      borderLeftColor,
      borderRightColor,
      borderRadius,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      boxShadow,
      textAlign,
      style,
      className,
      ...restProps
    },
    ref
  ) => {
    const inlineCSSProp = {
      width,
      maxWidth,
      height,
      maxHeight,
      minWidth,
      minHeight,
      color,
      backgroundColor,
      zIndex,
      top,
      right,
      left,
      bottom,
      borderColor,
      borderTopColor,
      borderBottomColor,
      borderLeftColor,
      borderRightColor,
      boxShadow,
    };

    return createElement(
      as,
      {
        className: classnames(
          as !== null && resetStyles.base,
          as !== null && resetStyles.fontReset,
          as !== null && resetStyles.element[as],
          // Responsive props
          parseResponsiveProp(styles.margin, margin),
          parseResponsiveProp(styles.marginTop, marginTop),
          parseResponsiveProp(styles.marginLeft, marginLeft),
          parseResponsiveProp(styles.marginRight, marginRight),
          parseResponsiveProp(styles.marginBottom, marginBottom),
          parseResponsiveProp(styles.padding, padding),
          parseResponsiveProp(styles.paddingTop, paddingTop),
          parseResponsiveProp(styles.paddingRight, paddingRight),
          parseResponsiveProp(styles.paddingLeft, paddingLeft),
          parseResponsiveProp(styles.paddingBottom, paddingBottom),
          parseResponsiveProp(styles.display, display),
          parseResponsiveProp(styles.alignItems, alignItems),
          parseResponsiveProp(styles.alignContent, alignContent),
          parseResponsiveProp(styles.justifyContent, justifyContent),
          parseResponsiveProp(styles.flex, flex),
          parseResponsiveProp(styles.flexBasis, flexBasis),
          parseResponsiveProp(styles.flexWrap, flexWrap),
          parseResponsiveProp(styles.flexGrow, flexGrow),
          parseResponsiveProp(styles.flexShrink, flexShrink),
          parseResponsiveProp(styles.flexDirection, flexDirection),
          parseResponsiveProp(styles.alignSelf, alignSelf),
          parseResponsiveProp(styles.order, order),
          // Non Responsive props
          styles.position[position],
          styles.verticalAlign[verticalAlign],
          styles.overflow[overflow],
          styles.overflowX[overflowX],
          styles.overflowY[overflowY],
          styles.opacity[opacity],
          styles.borderWidth[borderWidth],
          styles.borderTopWidth[borderTopWidth],
          styles.borderBottomWidth[borderBottomWidth],
          styles.borderLeftWidth[borderLeftWidth],
          styles.borderRightWidth[borderRightWidth],
          styles.borderStyle[borderStyle],
          styles.borderTopStyle[borderTopStyle],
          styles.borderBottomStyle[borderBottomStyle],
          styles.borderLeftStyle[borderLeftStyle],
          styles.borderRightStyle[borderRightStyle],
          styles.borderRadius[borderRadius],
          styles.borderTopLeftRadius[borderTopLeftRadius],
          styles.borderTopRightRadius[borderTopRightRadius],
          styles.borderBottomLeftRadius[borderBottomLeftRadius],
          styles.borderBottomRightRadius[borderBottomRightRadius],
          styles.textAlign[textAlign],
          className
        ),
        style: { ...inlineCSSProp, ...style },
        ref,
        ...restProps,
      },
      children
    );
  }
);

const checkResponsiveProp = (prop, propName, enums) => {
  const propValues = prop[propName];
  if (!propValues) return null;

  const result = Array.isArray(propValues)
    ? propValues.length > 0 &&
      propValues.length < 6 &&
      propValues.filter(val => enums.concat(['']).indexOf(val) < 0).length === 0
    : enums.indexOf(propValues) >= 0;

  return result
    ? null
    : new Error(
        `invalid values ${propValues} for prop: ${propName}, or prop is an array with more than 5 values. valid prop values are ${enums}`
      );
};

Box.propTypes /* remove-proptypes */ = {
  /**
   * @since Version v6.2.0
   *
   * The box type. Can be any html element type.
   *
   */
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * @since Version v6.2.0
   *
   * Children of this component
   *
   */
  children: PropTypes.node,
  /**
   *
   * The margin CSS property sets the margin area on all four sides of an element
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: xxTiny: 0.2rem, xTiny: 0.4rem, tiny: 0.8rem, xs: 1.2rem, sm: 1.6rem, md: 2.0rem, lg: 2.4rem, xl: 3.2rem, xxl: 4.8rem, clear: 0, auto
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  margin: (props, propName) =>
    checkResponsiveProp(props, propName, styles.marginEnums),
  /**
   * The margin-top CSS property sets the margin area on the top of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: xxTiny: 0.2rem, xTiny: 0.4rem, tiny: 0.8rem, xs: 1.2rem, sm: 1.6rem, md: 2.0rem, lg: 2.4rem, xl: 3.2rem, xxl: 4.8rem, clear: 0, auto
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  marginTop: (props, propName) =>
    checkResponsiveProp(props, propName, styles.marginEnums),
  /**
   *
   * The margin-left CSS property sets the margin area on the left of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: xxTiny: 0.2rem, xTiny: 0.4rem, tiny: 0.8rem, xs: 1.2rem, sm: 1.6rem, md: 2.0rem, lg: 2.4rem, xl: 3.2rem, xxl: 4.8rem, clear: 0, auto
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  marginLeft: (props, propName) =>
    checkResponsiveProp(props, propName, styles.marginEnums),
  /**
   * The margin-right CSS property sets the margin area on the right of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: xxTiny: 0.2rem, xTiny: 0.4rem, tiny: 0.8rem, xs: 1.2rem, sm: 1.6rem, md: 2.0rem, lg: 2.4rem, xl: 3.2rem, xxl: 4.8rem, clear: 0, auto
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  marginRight: (props, propName) =>
    checkResponsiveProp(props, propName, styles.marginEnums),
  /**
   *
   * The margin-bottom CSS property sets the margin area on the bottom of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: xxTiny: 0.2rem, xTiny: 0.4rem, tiny: 0.8rem, xs: 1.2rem, sm: 1.6rem, md: 2.0rem, lg: 2.4rem, xl: 3.2rem, xxl: 4.8rem, clear: 0, auto
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   */
  marginBottom: (props, propName) =>
    checkResponsiveProp(props, propName, styles.marginEnums),
  /**
   * The padding CSS property sets the padding area on all four sides of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: xxTiny: 0.2rem, xTiny: 0.4rem, tiny: 0.8rem, xs: 1.2rem, sm: 1.6rem, md: 2.0rem, lg: 2.4rem, xl: 3.2rem, xxl: 4.8rem, clear: 0,
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  padding: (props, propName) =>
    checkResponsiveProp(props, propName, spacingEnums),
  /**
   * The padding-top CSS property sets the height of the padding area on the top of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: xxTiny: 0.2rem, xTiny: 0.4rem, tiny: 0.8rem, xs: 1.2rem, sm: 1.6rem, md: 2.0rem, lg: 2.4rem, xl: 3.2rem, xxl: 4.8rem, clear: 0,
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  paddingTop: (props, propName) =>
    checkResponsiveProp(props, propName, spacingEnums),
  /**
   * The padding-left CSS property sets the height of the padding area on the left of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: xxTiny: 0.2rem, xTiny: 0.4rem, tiny: 0.8rem, xs: 1.2rem, sm: 1.6rem, md: 2.0rem, lg: 2.4rem, xl: 3.2rem, xxl: 4.8rem, clear: 0,
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  paddingLeft: (props, propName) =>
    checkResponsiveProp(props, propName, spacingEnums),
  /**
   * The padding-right CSS property sets the height of the padding area on the right of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: xxTiny: 0.2rem, xTiny: 0.4rem, tiny: 0.8rem, xs: 1.2rem, sm: 1.6rem, md: 2.0rem, lg: 2.4rem, xl: 3.2rem, xxl: 4.8rem, clear: 0,
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  paddingRight: (props, propName) =>
    checkResponsiveProp(props, propName, spacingEnums),
  /**
   * The padding-bottom CSS property sets the height of the padding area on the bottom of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: xxTiny: 0.2rem, xTiny: 0.4rem, tiny: 0.8rem, xs: 1.2rem, sm: 1.6rem, md: 2.0rem, lg: 2.4rem, xl: 3.2rem, xxl: 4.8rem, clear: 0,
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  paddingBottom: (props, propName) =>
    checkResponsiveProp(props, propName, spacingEnums),
  /**
   * The display CSS property defines the display type of an element, which consists of the two basic qualities
   * of how an element generates boxes — the outer display type defining how the box participates in flow layout,
   * and the inner display type defining how the children of the box are laid out.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: flex, block, inline, inline-block, inline-flex
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  display: (props, propName) =>
    checkResponsiveProp(props, propName, styles.displayEnums),
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The width CSS property sets an element's width
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/width)
   */
  width: PropTypes.string,
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The max-width CSS property sets the maximum width of an element.
   * It prevents the used value of the width property from becoming larger than the value specified by max-width.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
   *
   */
  maxWidth: PropTypes.string,
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The min-width CSS property sets the minimum width of an element.
   * It prevents the used value of the width property from becoming smaller than the value specified for min-width.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
   *
   */
  minWidth: PropTypes.string,
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The height CSS property specifies the height of an element. By default, the property defines the height of the
   * content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
   *
   */
  height: PropTypes.string,
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The max-height CSS property sets the maximum height of an element. It prevents the used value of the height
   * property from becoming larger than the value specified for max-height.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
   *
   */
  maxHeight: PropTypes.string,
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The min-height CSS property sets the minimum height of an element. It prevents the used value of the height
   * property from becoming smaller than the value specified for min-height.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
   *
   */
  minHeight: PropTypes.string,
  /**
   * The vertical-align CSS property specifies sets vertical alignment of an inline or table-cell box.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
   *
   * @since Version v6.2.0
   *
   * @type {OneOfString<baseline|top|middle|bottom|sub|text-top>}
   */
  verticalAlign: PropTypes.oneOf(styles.verticalAlignEnums),
  /**
   *
   * The overflow CSS property sets what to do when an element's content is too big to fit in its block
   * formatting context. It is a shorthand for overflow-x and overflow-y.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
   *
   * @since Version v6.2.0
   *
   * @type {OneOfString<visible|hidden|scroll|auto>}
   *
   */
  overflow: PropTypes.oneOf(styles.overflowEnums),
  /**
   *
   * The overflow-x CSS property sets what shows when content overflows a block-level element's left
   * and right edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x)
   *
   * @since Version v6.2.0
   *
   * @type {OneOfString<visible|hidden|scroll|auto>}
   *
   */
  overflowX: PropTypes.oneOf(styles.overflowEnums),
  /**
   *
   * The overflow-y CSS property sets what shows when content overflows a block-level element's top
   * and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y)
   *
   * @since Version v6.2.0
   *
   * @type {OneOfString<visible|hidden|scroll|auto>}
   *
   */
  overflowY: PropTypes.oneOf(styles.overflowEnums),
  /**
   *
   * The CSS align-items property sets the align-self value on all direct children as a group.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: 'stretch', 'center', 'start', 'end', 'flex-end'
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   */
  alignItems: (props, propName) =>
    checkResponsiveProp(props, propName, styles.alignItemsEnums),
  /**
   *
   * The CSS align-content property sets how the browser distributes space between and around content items
   * along the cross-axis of a flexbox container, and the main-axis of a grid container.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: start, center, space-between, space-around
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  alignContent: (props, propName) =>
    checkResponsiveProp(props, propName, styles.alignContentEnums),
  /**
   * The CSS justify-content property defines how the browser distributes space between and around content items
   * along the main-axis of a flex container, and the inline axis of a grid container.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: flex-start, flex-end, center, space-between, space-around, space-evenly
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  justifyContent: (props, propName) =>
    checkResponsiveProp(props, propName, styles.justifyContentEnums),
  /**
   * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.
   * If wrapping is allowed, it sets the direction that lines are stacked.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: nowrap, wrap, wrap-reverse
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  flexWrap: (props, propName) =>
    checkResponsiveProp(props, propName, styles.flexWrapEnums),
  /**
   *
   * The flex-basis CSS property sets the initial main size of a flex item
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: 0, auto
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  flexBasis: (props, propName) =>
    checkResponsiveProp(props, propName, styles.flexBasisEnums),
  /**
   *
   * The flex-direction CSS property specifies how flex items are placed in the flex container defining the main
   * axis and the direction (normal or reversed).
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: row, row-reverse, column, column-reverse
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  flexDirection: (props, propName) =>
    checkResponsiveProp(props, propName, styles.flexDirectionEnums),
  /**
   *
   * The flex CSS property specifies how a flex item will grow or shrink so as to fit the space available in
   * its flex container. This is a shorthand property that sets flex-grow, flex-shrink, and flex-basis.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: initial, auto, none, 1
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  flex: (props, propName) =>
    checkResponsiveProp(props, propName, styles.flexEnums),
  /**
   *
   * The align-self CSS property aligns flex items of the current flex line overriding the align-items value.
   *
   * If any of the item's cross-axis margin is set to auto, then align-self is ignored. In Grid layout align-self
   * aligns the item inside the grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: stretch, center, start, end, flex-end
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  alignSelf: (props, propName) =>
    checkResponsiveProp(props, propName, styles.alignSelfEnums),
  /**
   *
   * The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container
   * are sorted by ascending order value and then by their source code order.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: 0, 1, 2, 3
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  order: (props, propName) =>
    checkResponsiveProp(props, propName, styles.orderEnums),
  /**
   * The flex-grow CSS property sets the flex grow factor of a flex item main size. It specifies how much of the
   * remaining space in the flex container should be assigned to the item (the flex grow factor).
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: 0, 1, 2, 3
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   *
   */
  flexGrow: (props, propName) =>
    checkResponsiveProp(props, propName, styles.flexGrowShrinkEnums),
  /**
   *
   * The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger
   * than the flex container, items shrink to fit according to flex-shrink.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
   *
   * <strong>* This is a responsive prop.</strong> See above examples for more information.
   *
   * String options: 0, 1, 2, 3
   *
   * Array: max length of 5, with above string options or empty.
   *
   * @since Version v6.6.0
   *
   * @type {OneOfType<String|Array>}
   */
  flexShrink: (props, propName) =>
    checkResponsiveProp(props, propName, styles.flexGrowShrinkEnums),
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The color property sets the foreground color value of an element's text and text decorations
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
   *
   */
  color: PropTypes.string,
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The backgroundColor property sets the background color of an element
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
   *
   */
  backgroundColor: PropTypes.string,
  /**
   * The opacity CSS property sets the transparency of an element or the degree to which content
   * behind an element is visible.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
   *
   * Options: xxs: 0.11, xs: 0.17, sm: 0.28, md: 0.5, lg: 0.72, xl: 0.83, xxl: 1, clear: 0,
   *
   * @since Version v6.2.0
   *
   * @type {String}
   *
   */
  opacity: PropTypes.oneOf(styles.opacityEnums),
  /**
   * @since Version v6.2.0
   *
   * The z-index CSS property sets the z-order of a positioned element and its descendants or
   * flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
   */
  zIndex: PropTypes.number,
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The top CSS property participates in specifying the vertical position of a
   * positioned element. It has no effect on non-positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
   *
   */
  top: PropTypes.string,
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The right CSS property participates in specifying the horizontal position of a
   * positioned element. It has no effect on non-positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/right)
   *
   */
  right: PropTypes.string,
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The bottom CSS property participates in specifying the vertical position of a
   * positioned element. It has no effect on non-positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
   *
   */
  bottom: PropTypes.string,
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The left CSS property participates in specifying the horizontal position
   * of a positioned element. It has no effect on non-positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/left)
   *
   */
  left: PropTypes.string,
  /**
   *
   * The position CSS property specifies how an element is positioned in a document.
   * The top, right, bottom, and left properties determine the final location of positioned elements.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
   *
   * @since Version v6.2.0
   *
   * @type {OneOfString<static|relative|absolute|sticky|fixed>}
   */
  position: PropTypes.oneOf(styles.positionEnums),
  /**
   *
   * The border-width shorthand CSS property sets the width of all sides of an element's border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)
   *
   * Options: thin: 1px, thick: 2px, clear: 0
   *
   * @since Version v6.2.0
   *
   * @type {String}
   */
  borderWidth: PropTypes.oneOf(styles.borderWidthEnums),
  /**
   *
   * The border-top-width CSS property sets the width of the top border of an element.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width)
   *
   * Options: thin: 1px, thick: 2px, clear: 0
   *
   * @since Version v6.2.0
   *
   * @type {String}
   */
  borderTopWidth: PropTypes.oneOf(styles.borderWidthEnums),
  /**
   *
   * The border-bottom-width CSS property sets the width of the bottom border of an element.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width)
   *
   * Options: thin: 1px, thick: 2px, clear: 0
   *
   * @since Version v6.2.0
   *
   * @type {String}
   */
  borderBottomWidth: PropTypes.oneOf(styles.borderWidthEnums),
  /**
   *
   * The border-left-width CSS property sets the width of the left border of an element.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width)
   *
   * Options: thin: 1px, thick: 2px, clear: 0
   *
   * @since Version v6.2.0
   *
   * @type {String}
   */
  borderLeftWidth: PropTypes.oneOf(styles.borderWidthEnums),
  /**
   *
   * The border-right-width CSS property sets the width of the right border of an element.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width)
   *
   * Options: thin: 1px, thick: 2px, clear: 0
   *
   * @since Version v6.2.0
   *
   * @type {String}
   */
  borderRightWidth: PropTypes.oneOf(styles.borderWidthEnums),
  /**
   *
   * The border-style shorthand CSS property sets the style of all sides of an element's border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
   *
   * Options: none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset
   *
   * @since Version v6.2.0
   *
   * @type {String}
   */
  borderStyle: PropTypes.oneOf(styles.borderStyleEnums),
  /**
   *
   * The border-top-style CSS property sets the line style of an element's top border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style)
   *
   * Options: none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset
   *
   * @since Version v6.2.0
   *
   * @type {String}
   */
  borderTopStyle: PropTypes.oneOf(styles.borderStyleEnums),
  /**
   *
   * The border-bottom-style CSS property sets the line style of an element's bottom border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style)
   *
   * Options: none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset
   *
   * @since Version v6.2.0
   *
   * @type {String}
   */
  borderBottomStyle: PropTypes.oneOf(styles.borderStyleEnums),
  /**
   *
   * The border-left-style CSS property sets the line style of an element's left border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style)
   *
   * Options: none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset
   *
   * @since Version v6.2.0
   *
   * @type {String}
   */
  borderLeftStyle: PropTypes.oneOf(styles.borderStyleEnums),
  /**
   *
   * The border-right-style CSS property sets the line style of an element's right border.
   *
   * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style)
   *
   * Options: none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset
   *
   * @since Version v6.2.0
   *
   * @type {String}
   */
  borderRightStyle: PropTypes.oneOf(styles.borderStyleEnums),
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The border-color shorthand CSS property sets the color of all sides of an element's border.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
   *
   */
  borderColor: PropTypes.string,
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The border-top-color CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties border-color or border-top.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color)
   *
   */
  borderTopColor: PropTypes.string,
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The border-bottom-color CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties border-color or border-bottom.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color)
   *
   */
  borderBottomColor: PropTypes.string,
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The border-left-color CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties border-color or border-left.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color)
   *
   */
  borderLeftColor: PropTypes.string,
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The border-right-color CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties border-color or border-right.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color)
   *
   */
  borderRightColor: PropTypes.string,
  /**
   *
   * The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single
   * radius to make circular corners, or two radii to make elliptical corners.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
   *
   * Options: xs: 0.2rem, sm: 0.4rem, md: 0.8rem, lg: 1.2rem, xl: 2.4rem, clear: 0
   *
   * @since Version v6.2.0
   *
   * @type {String}
   */
  borderRadius: PropTypes.oneOf(borderRadiusEnums),
  /**
   *
   * The border-top-left-radius CSS property rounds the top-left corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)
   *
   * Options: xs: 0.2rem, sm: 0.4rem, md: 0.8rem, lg: 1.2rem, xl: 2.4rem, clear: 0
   *
   * @since Version v6.2.0
   *
   * @type {String}
   */
  borderTopLeftRadius: PropTypes.oneOf(borderRadiusEnums),
  /**
   *
   * The border-top-right-radius CSS property rounds the top-right corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)
   *
   * Options: xs: 0.2rem, sm: 0.4rem, md: 0.8rem, lg: 1.2rem, xl: 2.4rem, clear: 0
   *
   * @since Version v6.2.0
   *
   * @type {String}
   */
  borderTopRightRadius: PropTypes.oneOf(borderRadiusEnums),
  /**
   *
   * The border-bottom-left-radius CSS property rounds the bottom-left corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)
   *
   * Options: xs: 0.2rem, sm: 0.4rem, md: 0.8rem, lg: 1.2rem, xl: 2.4rem, clear: 0
   *
   * @since Version v6.2.0
   *
   * @type {String}
   */
  borderBottomLeftRadius: PropTypes.oneOf(borderRadiusEnums),
  /**
   *
   * The border-bottom-right-radius CSS property rounds the bottom-right corner of an element.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)
   *
   * Options: xs: 0.2rem, sm: 0.4rem, md: 0.8rem, lg: 1.2rem, xl: 2.4rem, clear: 0
   *
   * @since Version v6.2.0
   *
   * @type {String}
   */
  borderBottomRightRadius: PropTypes.oneOf(borderRadiusEnums),
  /**
   * @since Version v6.2.0
   *
   * <strong>Inline style</strong>
   * Please see the Alert at the top of the page for more information.
   *
   * The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated
   * by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii and color.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
   *
   */
  boxShadow: PropTypes.string,
  /**
   * @since Version v6.2.0
   *
   * The style props add an inline style to this component. Values specified through this props will override inline props
   * specified to in other props.
   *
   * For example:
   * `<Box backgroundColor='red' style={{backgroundColor: 'blue'}}/>` will produce a blue box and not a red box.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
   *
   */
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  /**
   *
   * The text-align CSS property sets the horizontal alignment of a block element or table-cell box
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
   *
   * @since Version v6.3.0
   *
   * @type {OneOfString<left|right|center|justify>}
   */
  textAlign: PropTypes.oneOf(styles.textAlignEnums),
  /**
   * Specify your own classname into this prop, if you need to customise layout of this component.
   * This classname will be put into the parent container of this components
   *
   * @since Version v6.3.0
   */
  className: PropTypes.string,
};

Box.defaultProps = {
  as: 'div',
};

Box.displayName = 'Box';

export default Box;
