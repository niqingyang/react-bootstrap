<>
  <Stack direction={"horizontal"} gap={3}>
    {['top', 'right', 'bottom', 'left'].map((placement) => (
      <OverlayTrigger
        trigger='click'
        key={placement}
        placement={placement}
        overlay={
          <BasePopover id={`popover-positioned-${placement}`}>
            <BasePopover.Header as='h3'>{`Popover ${placement}`}</BasePopover.Header>
            <BasePopover.Body>
              <strong>Holy guacamole!</strong> Check this info.
            </BasePopover.Body>
          </BasePopover>
        }
      >
        <Button variant='secondary'>Popover on {placement}</Button>
      </OverlayTrigger>
    ))}
  </Stack>
</>
