import {
  FormElement,
  FormElementDisabled,
  FormElementAlign,
  FormElementPadding,
  FormElementVariants,
} from '../formElementStyles.treat';
import getFormElementStyles from '../getFormElementStyles';
import { overrides as selectOverrides } from '../../../components/Select/SelectBox.treat';

describe('getFormElementStyles', () => {
  it('should return base styles', () => {
    const props = {};
    const classNames = getFormElementStyles(props);
    expect(classNames).toContain(FormElement);
  });
  it('should return override select styles', () => {
    const props = {};
    const classNames = getFormElementStyles(props);
    expect(classNames).toContain(selectOverrides.select);
  });
  it('should return disabled styles when disabled', () => {
    const props = { disabled: true };
    const classNames = getFormElementStyles(props);
    expect(classNames).toContain(FormElementDisabled);
  });
  it('should return text align styles when text align left', () => {
    const props = { textAlign: 'left' };
    const classNames = getFormElementStyles(props);
    expect(classNames).toContain(FormElementAlign.left);
  });
  it('should return text align styles when text align right', () => {
    const props = { textAlign: 'right' };
    const classNames = getFormElementStyles(props);
    expect(classNames).toContain(FormElementAlign.right);
  });
  it('should return text align styles when text align center', () => {
    const props = { textAlign: 'center' };
    const classNames = getFormElementStyles(props);
    expect(classNames).toContain(FormElementAlign.center);
  });
  it('should return text align with error styles when text align left', () => {
    const props = {
      textAlign: 'left',
      errorMessage: 'message',
      errorMessageInline: true,
    };
    const classNames = getFormElementStyles(props);
    expect(classNames).toContain(FormElementPadding.left);
  });
  it('should return text align with error styles when text align right', () => {
    const props = {
      textAlign: 'right',
      errorMessage: 'message',
      errorMessageInline: true,
    };
    const classNames = getFormElementStyles(props);
    expect(classNames).toContain(FormElementPadding.right);
  });
  describe('element variants', () => {
    describe('disabled', () => {
      it('should return disabled variant class when disabled', () => {
        const props = {
          disabled: true,
        };
        const classNames = getFormElementStyles(props);
        expect(classNames).toContain(FormElementVariants.disabled);
      });
      it('should return disabled variant class when readOnly', () => {
        const props = {
          readOnly: true,
        };
        const classNames = getFormElementStyles(props);
        expect(classNames).toContain(FormElementVariants.disabled);
      });
      it('should not return disabled variant class when not disabled or readOnly', () => {
        const props = {
          errorVariant: 'error',
        };
        const classNames = getFormElementStyles(props);
        expect(classNames).not.toContain(FormElementVariants.disabled);
      });
    });
    describe('error', () => {
      it('should return error variant class when error variant defined with error message. ', () => {
        const props = {
          errorVariant: 'error',
          errorMessage: 'test',
        };
        const classNames = getFormElementStyles(props);
        expect(classNames).toContain(FormElementVariants.error);
      });
      it('should not return error variant class when no message defined. ', () => {
        const props = { errorVariant: 'error' };
        const classNames = getFormElementStyles(props);
        expect(classNames).not.toContain(FormElementVariants.error);
      });
    });
    describe('info', () => {
      it('should return info variant class when info variant defined with error message. ', () => {
        const props = {
          errorVariant: 'info',
          errorMessage: 'test',
        };
        const classNames = getFormElementStyles(props);
        expect(classNames).toContain(FormElementVariants.info);
      });
      it('should not return error variant class when no message defined. ', () => {
        const props = { errorVariant: 'info' };
        const classNames = getFormElementStyles(props);
        expect(classNames).not.toContain(FormElementVariants.info);
      });
    });
    describe('warning', () => {
      it('should return warning variant class when warning variant defined with error message. ', () => {
        const props = {
          errorVariant: 'warning',
          errorMessage: 'test',
        };
        const classNames = getFormElementStyles(props);
        expect(classNames).toContain(FormElementVariants.warning);
      });
      it('should not return warning variant class when no message defined. ', () => {
        const props = { errorVariant: 'warning' };
        const classNames = getFormElementStyles(props);
        expect(classNames).not.toContain(FormElementVariants.warning);
      });
    });
    describe('primary', () => {
      it('should return primary variant class when no variant defined. ', () => {
        const props = {};
        const classNames = getFormElementStyles(props);
        expect(classNames).toContain(FormElementVariants.primary);
      });
    });
  });
});
