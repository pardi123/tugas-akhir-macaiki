import { render } from '@testing-library/react';

import MacaikiRegister from './macaiki-register';

describe('MacaikiRegister', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MacaikiRegister />);
    expect(baseElement).toBeTruthy();
  });
});
