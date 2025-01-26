import { Page } from '@playwright/test';
import { PlaywrightPage } from '../../src/PlaywrightPage';

export abstract class BasePage extends PlaywrightPage {
  constructor(page: Page) {
    super(page);
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('load');
  }
}
