function Example() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Tooltip title="My Tooltip" show={show} placement="right">
        <Button onClick={() => setShow(!show)}>
          Click me!
        </Button>
      </Tooltip>
    </>
  );
}

render(<Example />);
