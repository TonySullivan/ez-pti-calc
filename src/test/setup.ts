import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mocks/server';

// Start MSW server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset handlers after each test (cleans up inline overrides)
afterEach(() => server.resetHandlers());

// Close MSW server after all tests are done
afterAll(() => server.close());
