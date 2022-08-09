import { render } from '@testing-library/react';

import MacaikiHome from './macaiki-home';

describe('MacaikiHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MacaikiHome />);
    expect(baseElement).toBeTruthy();
  });
});
