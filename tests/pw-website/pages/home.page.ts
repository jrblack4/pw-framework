import { Locator, Page } from '@playwright/test';
import { BasePage } from '../../pages/base.page';
import { IHomePage } from '../interfaces/IHomePage';

export class HomePage extends BasePage implements IHomePage {

  constructor(page: Page) {
    super(page);
  }

  get getStarted(): Locator {
    return this.page.getByRole('link', { name: 'Get Started' });
  }
  
  async clickGetStarted(): Promise<void> {
    await this.getStarted.click();
  }
}
