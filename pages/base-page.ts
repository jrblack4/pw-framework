import { IBasePage } from '../interfaces/IBasePage';
import { type Page } from '@playwright/test';

export class BasePage implements IBasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async waitForElement(selector: any, timeout?: number): Promise<void> {
  await this.page.waitForSelector(selector, { timeout: timeout })
  }

}
