import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Box from '../Box/Box';
import badge from './Badge.css';

export const validBadgeColors = [
    'default',
    'light-grey',
    'green',
    'orange',
    'red',
    'blue',
    'purple',
];

/* eslint-disable react/prefer-stateless-function */
/**
 * Badge
 *
 * @visibleName
 * @see Added: v1.0 Last updated: v6.5.0
 *
 */
const Badge = ({ color, className, children, ...restProps }) => {
    const safeColor = validBadgeColors.includes(color) ? color : 'default';

    return (
        <Box
            as="span"
            display="inline-block"
            textAlign="center"
            verticalAlign="middle"
            className={classnames(
                'badge',
                badge.base,
                badge[safeColor],
                {
                    [safeColor]: safeColor !== 'default',
                },
                className
            )}
            {...restProps}
        >
            {children}
        </Box>
    );
};

Badge.propTypes = {
    /**
     * One or many nodes to be rendered inside the badge container
     */
    children: PropTypes.node,
    /**
     * Color of the badge.
     * Options: default, light-grey, green, orange, red, blue, purple,
     */
    color: PropTypes.oneOf(validBadgeColors),
    /**
     * Specify your own classname into this prop, if you need to customise layout of this component.
     * This classname will be put into the parent container of this components.
     * @since Version 6.0.0
     */
    className: PropTypes.string,
};

Badge.defaultProps = {
    children: undefined,
    color: 'default',
    className: undefined,
};

export default Badge;
