// jest.config.js
module.exports = {
    preset: '@testing-library/svelte',
    transform: {
      '^.+\\.svelte$': 'svelte-jester',
      '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'svelte'],
  };
  