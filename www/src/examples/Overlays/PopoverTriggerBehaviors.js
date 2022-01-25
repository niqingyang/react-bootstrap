const popover = (triggerBehavior) => (
  <BasePopover id={`popover-trigger-${triggerBehavior}`}>
    <BasePopover.Header as="h3">Popover bottom</BasePopover.Header>
    <BasePopover.Body>
      <strong>Holy guacamole!</strong> Check this info.
    </BasePopover.Body>
  </BasePopover>
);

const popoverClick = <popover triggerBehavior="click" />;

const popoverHoverFocus = <popover triggerBehavior="hover-focus" />;

const popoverFocus = <popover triggerBehavior="focus" />;

const popoverClickRootClose = <popover triggerBehavior="click-root-close" />;

render(
  <>
    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick}>
      <Button>Click</Button>
    </OverlayTrigger>{' '}
    <OverlayTrigger
      trigger={['hover', 'focus']}
      placement="bottom"
      overlay={popoverHoverFocus}
    >
      <Button>Hover + Focus</Button>
    </OverlayTrigger>{' '}
    <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverFocus}>
      <Button>Focus</Button>
    </OverlayTrigger>{' '}
    <OverlayTrigger
      trigger="click"
      rootClose
      placement="bottom"
      overlay={popoverClickRootClose}
    >
      <Button>Click w/rootClose</Button>
    </OverlayTrigger>
  </>,
);
