import { test, expect } from '../fixtures/pw-website';

test('foo', async ({ homePage }) => {
  await homePage.clickGetStarted();
  expect(1).toBe(1);
})
