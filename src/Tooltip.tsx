import * as React from 'react';
import PropTypes from 'prop-types';
import BaseTooltip, { BaseTooltipProps } from './BaseTooltip';
import OverlayTrigger, {
  OverlayTriggerProps,
  OverlayTriggerRenderProps,
} from './OverlayTrigger';

export interface TooltipProps extends Omit<BaseTooltipProps, "title">, OverlayTriggerProps {
  title: React.ReactNode
  children: React.ReactElement | ((props: OverlayTriggerRenderProps) => React.ReactNode)
}

const propTypes = {

  /**
   * Tooltip content
   */
  title: PropTypes.any,

  /**
   * extends OverlayTrigger.propTypes
   */
  ...BaseTooltip.propTypes,

  /**
   * extends OverlayTrigger.propTypes
   */
  ...OverlayTrigger.propTypes
};

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      title,
      children,
      popper: _,

      trigger,
      delay,
      show,
      defaultShow,
      onToggle,
      flip,

      ...props
    }: TooltipProps,
    ref,
  ) => {

    const overlay = (
      <BaseTooltip ref={ref} {...props}>
        {title}
      </BaseTooltip>
    );

    return (
      <OverlayTrigger
        placement={props.placement}
        overlay={overlay}
        {...{ trigger, delay, show, defaultShow, onToggle, flip }}
      >
        {React.Children.count(children) > 1 ? (<span>{children}</span>) : children}
      </OverlayTrigger>
    );
  },
);

Tooltip.propTypes = propTypes as any;
Tooltip.defaultProps = BaseTooltip.defaultProps as any;
Tooltip.displayName = 'Tooltip';

export default Tooltip;
