import React from 'react';
import { render, cleanup, waitFor, screen } from '@testing-library/react';
import CharacterListPage from './CharacterListPage';

describe('CharacterListPage Container', () => {
  afterEach(() => cleanup());
  it('displays HeyArnold character data', () => {
    const { asFragment } = render(<CharacterListPage />);
    expect(asFragment()).toMatchSnapshot();
  });

});

describe('CharacterListPage Component', () => {
  it('displays a list of characters', async() => {
    render(<CharacterListPage />);

    const characterList = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});

