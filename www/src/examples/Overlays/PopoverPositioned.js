<>
  <Stack direction={"horizontal"} gap={3}>
    {['top', 'right', 'bottom', 'left'].map((placement) => (
      <Popover
        trigger='click'
        key={placement}
        placement={placement}
        title={`Popover ${placement}`}
        content={<div><strong>Holy guacamole!</strong> Check this info.</div>}
      >
        <Button variant='secondary'>Popover on {placement}</Button>
      </Popover>
    ))}
  </Stack>
</>;
