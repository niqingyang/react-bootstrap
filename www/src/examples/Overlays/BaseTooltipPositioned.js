<>
  {['top', 'right', 'bottom', 'left'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <BaseTooltip id={`tooltip-${placement}`}>
          Tooltip on <strong>{placement}</strong>.
        </BaseTooltip>
      }
    >
      <Button variant="secondary">Tooltip on {placement}</Button>
    </OverlayTrigger>
  ))}
</>;
