const popover = (
  <BasePopover id="popover-basic">
    <BasePopover.Header as="h3">Popover right</BasePopover.Header>
    <BasePopover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </BasePopover.Body>
  </BasePopover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
);

render(<Example />);
