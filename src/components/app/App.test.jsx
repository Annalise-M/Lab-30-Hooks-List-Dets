import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import '@babel/polyfill';


describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
