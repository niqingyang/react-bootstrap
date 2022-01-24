<OverlayTrigger overlay={<BaseTooltip id="tooltip-disabled">Tooltip!</BaseTooltip>}>
  <span className="d-inline-block">
    <Button disabled style={{ pointerEvents: 'none' }}>
      Disabled button
    </Button>
  </span>
</OverlayTrigger>;
