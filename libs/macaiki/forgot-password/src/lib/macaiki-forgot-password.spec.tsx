import { render } from '@testing-library/react';

import MacaikiForgotPassword from './macaiki-forgot-password';

describe('MacaikiForgotPassword', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MacaikiForgotPassword />);
    expect(baseElement).toBeTruthy();
  });
});
