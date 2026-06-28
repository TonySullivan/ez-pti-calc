import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mocks/server';

// Inject dummy Firebase variables for test environment
if (typeof import.meta.env === 'undefined') {
  (import.meta as any).env = {};
}
import.meta.env.VITE_FIREBASE_API_KEY = 'mock-api-key';
import.meta.env.VITE_FIREBASE_AUTH_DOMAIN = 'mock-auth-domain';
import.meta.env.VITE_FIREBASE_PROJECT_ID = 'mock-project-id';
import.meta.env.VITE_FIREBASE_STORAGE_BUCKET = 'mock-storage-bucket';
import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID = 'mock-sender-id';
import.meta.env.VITE_FIREBASE_APP_ID = 'mock-app-id';
import.meta.env.VITE_USE_FIREBASE_EMULATOR = 'true';

// Start MSW server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset handlers after each test (cleans up inline overrides)
afterEach(() => server.resetHandlers());

// Close MSW server after all tests are done
afterAll(() => server.close());
