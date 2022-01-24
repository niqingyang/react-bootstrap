class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getTarget = this.getTarget.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      show: true,
    };
  }

  getTarget() {
    return ReactDOM.findDOMNode(this.target);
  }

  handleToggle() {
    this.setState((s) => ({ show: !s.show }));
  }

  render() {
    const sharedProps = {
      container: this,
      target: this.getTarget,
      show: this.state.show,
    };

    return (
      <div style={{ height: 100, paddingLeft: 150, position: 'relative' }}>
        <Button
          ref={(button) => {
            this.target = button;
          }}
          onClick={this.handleToggle}
        >
          Click me!
        </Button>

        <Overlay {...sharedProps} placement="left">
          <BaseTooltip id="overload-left">Tooltip overload!</BaseTooltip>
        </Overlay>
        <Overlay {...sharedProps} placement="top">
          <BaseTooltip id="overload-top">Tooltip overload!</BaseTooltip>
        </Overlay>
        <Overlay {...sharedProps} placement="right">
          <BaseTooltip id="overload-right">Tooltip overload!</BaseTooltip>
        </Overlay>
        <Overlay {...sharedProps} placement="bottom">
          <BaseTooltip id="overload-bottom">Tooltip overload!</BaseTooltip>
        </Overlay>
      </div>
    );
  }
}

render(<Example />);
