import * as React from 'react';
import PropTypes from 'prop-types';
import PopoverHeader from './PopoverHeader';
import PopoverBody from './PopoverBody';
import BasePopover, { BasePopoverProps } from './BasePopover';
import OverlayTrigger, {
  OverlayTriggerProps,
  OverlayTriggerRenderProps,
} from './OverlayTrigger';

export interface PopoverProps extends BasePopoverProps, OverlayTriggerProps {
  title?: any;
  content?: React.ReactNode;
  children: React.ReactElement | ((props: OverlayTriggerRenderProps) => React.ReactNode);
}

const propTypes = {

  title: PropTypes.any,

  content: PropTypes.any,

  /**
   * extends OverlayTrigger.propTypes
   */
  ...BasePopover.propTypes,

  /**
   * extends OverlayTrigger.propTypes
   */
  ...OverlayTrigger.propTypes,
};

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      placement,

      children,


      trigger,
      delay,
      show,
      defaultShow,
      onToggle,
      flip,


      title,
      content,

      ...props
    },
    ref,
  ) => {

    const popover = (
      <BasePopover body={false} ref={ref} {...props}>
        {title ? <PopoverHeader>{title}</PopoverHeader> : null}
        {content ? <PopoverBody>{content}</PopoverBody> : null}
      </BasePopover>
    );

    return (
      <OverlayTrigger
        overlay={popover}
        {...{ trigger, placement, delay, show, defaultShow, onToggle, flip }}
      >
        {children}
      </OverlayTrigger>
    );
  },
);

Popover.propTypes = propTypes as any;
Popover.defaultProps = BasePopover.defaultProps as any;

export default Object.assign(Popover, {
  Header: PopoverHeader,
  Body: PopoverBody,

  // Default popover offset.
  // https://github.com/twbs/bootstrap/blob/5c32767e0e0dbac2d934bcdee03719a65d3f1187/js/src/popover.js#L28
  POPPER_OFFSET: BasePopover.POPPER_OFFSET,
});
