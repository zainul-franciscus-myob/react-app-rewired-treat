import classnames from 'classnames';
import {
  FormElement,
  FormElementDisabled,
  FormElementAlign,
  FormElementPadding,
  FormElementVariants,
} from './formElementStyles.treat';
import { overrides as selectOverrides } from '../../components/Select/SelectBox.treat';

const getVariantClass = ({
  errorVariant,
  errorMessage,
  disabled,
  readOnly,
}) => {
  if (disabled || readOnly) {
    return FormElementVariants.disabled;
  }
  if (errorVariant && errorMessage) {
    return FormElementVariants[errorVariant];
  }
  return FormElementVariants.primary;
};

const getFormElementStyles = props => {
  return classnames(
    FormElement,
    getVariantClass(props),
    FormElementPadding.padding,
    selectOverrides.select,
    {
      [FormElementDisabled]: props.disabled,
    },
    {
      [FormElementAlign[props.textAlign]]: props.textAlign,
    },
    {
      [FormElementPadding[props.textAlign]]:
        props.textAlign && props.errorMessage && props.errorMessageInline,
    }
  );
};

// eslint-disable-next-line import/prefer-default-export
export default getFormElementStyles;
