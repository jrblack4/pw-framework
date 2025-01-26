import { defineConfig } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: undefined,
  reporter: 'line',
  use: {
    trace: 'off',
    connectOptions: {
      wsEndpoint: 'ws://127.0.0.1:9222',
    },
  },
  projects: [
    // {
    //   name: 'pw-website',
    //   testDir: './tests/pw-website'
    // },
    {
      name: 'sauce-demo',
      testDir: './tests/sauce-demo',
      use: {
        testIdAttribute: 'data-test',
        baseURL: 'https://www.saucedemo.com',
      }
    }
  ]
});
