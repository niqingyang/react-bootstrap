const renderTooltip = (props) => (
  <BaseTooltip id="button-tooltip" {...props}>
    Simple tooltip
  </BaseTooltip>
);

render(
  <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    <Button variant="success">Hover me to see</Button>
  </OverlayTrigger>,
);
