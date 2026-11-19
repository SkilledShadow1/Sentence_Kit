import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/',
  testMatch: '**/*.spec.ts',
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: false,
  },
  use: { baseURL: 'http://localhost:5173' },
});
