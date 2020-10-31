import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ListPage from './ListPage';

describe('ListPage container', () => {
  afterEach(() => cleanup());
  it('displays HeyArnold character data', () => {
    const { asFragment } = render(<ListPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
