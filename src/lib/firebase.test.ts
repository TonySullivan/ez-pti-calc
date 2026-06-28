import { describe, expect, test } from 'vitest';

describe('Firebase Client Setup', () => {
  test('imports config values cleanly from environment variables', async () => {
    // Dynamically load the client to prevent global failures before mock settings are resolved
    const firebaseModule = await import('./firebase');
    
    expect(firebaseModule.auth).toBeDefined();
    expect(firebaseModule.db).toBeDefined();
  });
});
