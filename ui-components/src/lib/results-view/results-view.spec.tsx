import { render } from '@testing-library/react';

import ResultsView from './results-view';

describe('ResultsView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResultsView />);
    expect(baseElement).toBeTruthy();
  });
});
