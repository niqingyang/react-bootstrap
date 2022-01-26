<>
  <Stack>
    {['top', 'right', 'bottom', 'left'].map((placement) => (
      <Tooltip
        key={placement}
        id={`tooltip-${placement}`}
        placement={placement}
        title={
          <>Tooltip on <strong>{placement}</strong>.</>
        }
      >
        <Button variant='secondary' style={{marginRight: "4px"}}>Tooltip on {placement}</Button>
      </Tooltip>
    ))}
  </Stack>
</>;
