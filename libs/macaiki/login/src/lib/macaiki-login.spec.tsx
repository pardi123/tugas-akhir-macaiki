import { render } from '@testing-library/react';

import MacaikiLogin from './macaiki-login';

describe('MacaikiLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MacaikiLogin />);
    expect(baseElement).toBeTruthy();
  });
});
