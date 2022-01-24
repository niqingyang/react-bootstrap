function Example() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button ref={target} onClick={() => setShow(!show)}>
        Click me!
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <BaseTooltip id="overlay-example" {...props}>
            My Tooltip
          </BaseTooltip>
        )}
      </Overlay>
    </>
  );
}

render(<Example />);
