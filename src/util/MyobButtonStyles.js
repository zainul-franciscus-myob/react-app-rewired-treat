import classnames from 'classnames';
import * as style from '../components/Button/Button.treat';
import { overrides as iconOverride } from '../components/Icons/icon.treat';

const getButtonStyle = (type, size, disabled, removeLegacyClasses = false) => {
  const bsStyle = {
    primary: 'primary',
    secondary: 'default',
    link: 'link',
    delete: 'confirm-delete',
    clear: 'clear',
  }[type];
  const isSizeXs = size === 'xs';
  const isTypeLink = type === 'link';
  const verticalPadding = !isSizeXs && {
    paddingTop: 'xTiny',
    paddingBottom: 'xTiny',
  };
  return {
    buttonClasses: classnames(
      style.button.base,
      { [style.button.minWidth]: !isSizeXs && !isTypeLink },
      style.type[type],
      [iconOverride.button],
      {
        [iconOverride.buttonSecondary]: type === 'secondary',
        [iconOverride.buttonSecondaryHover]: type === 'secondary' && !disabled,
        disabled,
        [style.disabled]: disabled,
      },
      style.size[size],
      { btn: !removeLegacyClasses },
      { [`btn-${bsStyle}`]: !removeLegacyClasses },
      { [`btn-${size}`]: size && !removeLegacyClasses }
    ),
    boxProps: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...verticalPadding,
      paddingLeft: !isSizeXs && !isTypeLink ? 'xs' : undefined,
      paddingRight: !isSizeXs && !isTypeLink ? 'xs' : undefined,
      textAlign: 'center',
      verticalAlign: 'middle',
      borderRadius: 'sm',
    },
  };
};

export default getButtonStyle;
