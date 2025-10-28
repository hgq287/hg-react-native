module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.test.ts?(x)'],
};