import { Locator } from '@playwright/test';
import { loginPage } from '../locators.json';
import type { ILoginPage } from '../interfaces/ILoginPage';
import { BasePage } from '../../pages/base.page';

export class LoginPage extends BasePage implements ILoginPage {
  private username: Locator = this.page.getByTestId(loginPage.username.name);
  private password: Locator = this.page.getByTestId(loginPage.password.name);
  private loginBtn: Locator = this.page.getByTestId(loginPage.loginBtn.name);

  async fillUsername(username: string): Promise<void> {
    this.username.fill(username);
  }

  async fillPassword(password: string): Promise<void> {
    this.password.fill(password);
  }

  async login(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.loginBtn.click();
  }
}
