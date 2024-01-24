// Import necessary utilities and components
const { render, waitFor } = require('@testing-library/svelte');
import '@testing-library/jest-dom/extend-expect';
import RecipeComponent from './path-to-your-RecipeComponent.svelte';
import fetchMock from 'jest-fetch-mock';

// Enable fetch mocks for all tests in this file
fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

test('loads and displays recipes', async () => {
  // Mock the fetch response
  fetch.mockResponseOnce(JSON.stringify([
    { id: 1, name: 'Recipe 1' },
    { id: 2, name: 'Recipe 2' }
  ]));

  // Render the component
  const { getByText } = render(RecipeComponent);

  // Wait for the component to update
  await waitFor(() => {
    expect(getByText('Recipe 1')).toBeInTheDocument();
    expect(getByText('Recipe 2')).toBeInTheDocument();
  });
});
