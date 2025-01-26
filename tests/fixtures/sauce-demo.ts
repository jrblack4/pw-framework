import { test as base } from '@playwright/test';
import { ILoginPage } from '../sauce-demo/interfaces/ILoginPage';
import { LoginPage } from '../sauce-demo/pages/login.page';

type SauceDemoPages = {
  loginPage: ILoginPage,
}

export const test = base.extend<{ SauceDemo: SauceDemoPages }>({
  SauceDemo: async({ page }, use) => {
    const pages: SauceDemoPages = {
      loginPage: new LoginPage(page),
    };
    await use(pages)
  }
})

export { expect } from '@playwright/test';
