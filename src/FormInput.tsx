import classNames from 'classnames';
import PropTypes from 'prop-types';

import * as React from 'react';
import { useMemo } from 'react';

import createWithBsPrefix from './createWithBsPrefix';
import { useBootstrapPrefix } from './ThemeProvider';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
import FormControl, { FormControlProps } from './FormControl';
import InputWrapperContext from './InputWrapperContext';


const FormInputPrefix = createWithBsPrefix('input-wrapper-prefix', {
  Component: 'span',
});

const FormInputSuffix = createWithBsPrefix('input-wrapper-suffix', {
  Component: 'span',
});

export interface FormInputProps
  extends FormControlProps {
  prefix?: any,
  suffix?: any
}

const propTypes = {
  /**
   * @default {'form-control'}
   */
  bsPrefix: PropTypes.string,

  /**
   * The FormControl `ref` will be forwarded to the underlying input element,
   * which means unless `as` is a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: PropTypes.any,
  /**
   * Input size variants
   *
   * @type {('sm'|'lg')}
   */
  size: PropTypes.string,

  /**
   * The size attribute of the underlying HTML element.
   * Specifies the visible width in characters if `as` is `'input'`.
   */
  htmlSize: PropTypes.number,

  /**
   * The underlying HTML element to use when rendering the FormControl.
   *
   * @type {('input'|'textarea'|elementType)}
   */
  as: PropTypes.elementType,

  /**
   * Render the input as plain text. Generally used along side `readOnly`.
   */
  plaintext: PropTypes.bool,

  /** Make the control readonly */
  readOnly: PropTypes.bool,

  /** Make the control disabled */
  disabled: PropTypes.bool,

  /**
   * The `value` attribute of underlying input
   *
   * @controllable onChange
   * */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
  ]),

  /** A callback fired when the `value` prop changes */
  onChange: PropTypes.func,

  /**
   * The HTML input `type`, which is only relevant if `as` is `'input'` (the default).
   */
  type: PropTypes.string,

  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  id: PropTypes.string,

  /** Add "valid" validation styles to the control */
  isValid: PropTypes.bool,

  /** Add "invalid" validation styles to the control and accompanying label */
  isInvalid: PropTypes.bool,

  /**
   * Add "prefix" before `<Form.Control>`
   */
  prefix: PropTypes.any,

  /**
   * Add "suffix" after `<Form.Control>`
   */
  suffix: PropTypes.any,
};

/**
 *
 */
const FormInput: BsPrefixRefForwardingComponent<'span', FormInputProps> =
  React.forwardRef<HTMLInputElement, FormInputProps>(
    (
      {
        bsPrefix,
        size,
        className,
        // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
        as: Component = 'span',
        prefix,
        suffix,
        ...props
      },
      ref,
    ) => {
      bsPrefix = useBootstrapPrefix(bsPrefix, 'input-wrapper');

      let classes;
      if (props.plaintext) {
        classes = {
          [bsPrefix]: true,
          [`${bsPrefix}-plaintext`]: true,
        };
      } else {
        classes = {
          [bsPrefix]: true,
          [`${bsPrefix}-${size}`]: size,
        };
      }

      // Intentionally an empty object. Used in detecting if a dropdown
      // exists under an input group.
      const contextValue = useMemo(() => ({}), []);

      return (
        <InputWrapperContext.Provider value={contextValue}>
          <Component
            className={classNames(
              className,
              classes,
              props.disabled && `${bsPrefix}-disabled`,
              props.readOnly && `${bsPrefix}-readonly`,
              props.isValid && `is-valid`,
              props.isInvalid && `is-invalid`,
              props.type === 'color' && `${bsPrefix}-color`,
            )}
          >
            {prefix && <span className={classNames(
              `${bsPrefix}-prefix`,
            )}>{prefix}</span>}
            <FormControl
              ref={ref}
              as='input'
              {...props}
              className={classNames(
                className,
              )} />
            {suffix && <span className={classNames(
              `${bsPrefix}-suffix`,
            )}>{suffix}</span>}
          </Component>
        </InputWrapperContext.Provider>
      );
    },
  );

FormInput.propTypes = propTypes;
FormInput.displayName = 'FormInput';

export default Object.assign(FormInput, {
  Prefix: FormInputPrefix,
  Suffix: FormInputSuffix,
});
