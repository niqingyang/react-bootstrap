import { render } from '@testing-library/react';
import BaseTooltip from '../src/BaseTooltip';

describe('Tooltip', () => {
  it('Should output a tooltip with content', () => {
    const { getByTestId } = render(
      <BaseTooltip data-testid="test-tooltip" placement="right">
        <strong>Tooltip Content</strong>
      </BaseTooltip>,
    );

    getByTestId('test-tooltip').classList.should.contains([
      'tooltip',
      'bs-tooltip-end',
    ]);

    getByTestId('test-tooltip')
      .getAttribute('x-placement')!
      .should.equal('right');
  });
});
