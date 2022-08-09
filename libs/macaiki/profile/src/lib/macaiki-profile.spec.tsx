import { render } from '@testing-library/react';

import MacaikiProfile from './macaiki-profile';

describe('MacaikiProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MacaikiProfile />);
    expect(baseElement).toBeTruthy();
  });
});
