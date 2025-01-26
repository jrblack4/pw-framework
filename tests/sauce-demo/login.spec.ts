import { test } from '../fixtures/sauce-demo';

test.describe('Login', () => {
  test('foo', async({ SauceDemo }) => {
    await SauceDemo.loginPage.goTo('/');
  });
});
