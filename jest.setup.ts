import '@testing-library/jest-dom';

jest.mock('next/font/google', () => ({
    Roboto_Slab: {
      className: 'mock-roboto-slab',
    },
  }));