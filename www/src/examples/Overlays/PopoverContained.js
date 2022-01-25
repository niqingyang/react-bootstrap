function Example() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>Holy guacamole!</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <BasePopover id="popover-contained">
          <BasePopover.Header as="h3">Popover bottom</BasePopover.Header>
          <BasePopover.Body>
            <strong>Holy guacamole!</strong> Check this info.
          </BasePopover.Body>
        </BasePopover>
      </Overlay>
    </div>
  );
}

render(<Example />);
