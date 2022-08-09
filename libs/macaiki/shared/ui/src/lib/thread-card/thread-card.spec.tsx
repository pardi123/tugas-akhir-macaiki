import { render } from '@testing-library/react';

import ThreadCard from './thread-card';

describe('ThreadCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThreadCard />);
    expect(baseElement).toBeTruthy();
  });
});
