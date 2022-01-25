import * as React from 'react';

import { render } from '@testing-library/react';
import Overlay from '../src/Overlay';
import BasePopover from '../src/BasePopover';

describe('<Overlay>', () => {
  it('should forward ref to the overlay', () => {
    const ref = React.createRef<any>();
    render(
      <Overlay ref={ref} show target={ref.current}>
        <BasePopover id="my-overlay">test</BasePopover>
      </Overlay>,
    );

    ref.current.id.should.equal('my-overlay');
  });

  it('should use Fade internally if transition=true', () => {
    const ref = React.createRef<any>();
    const { getByTestId } = render(
      <Overlay show transition ref={ref} target={ref.current}>
        <BasePopover id="my-overlay" data-testid="test">
          test
        </BasePopover>
      </Overlay>,
    );
    const popoverElem = getByTestId('test');
    popoverElem.classList.contains('fade').should.be.true;
  });

  it('should not use Fade if transition=false', () => {
    const ref = React.createRef<any>();
    const { getByTestId } = render(
      <Overlay show transition={false} ref={ref} target={ref.current}>
        <BasePopover id="my-overlay" data-testid="test">
          test
        </BasePopover>
      </Overlay>,
    );
    const popoverElem = getByTestId('test');
    popoverElem.classList.contains('fade').should.be.false;
  });
});
