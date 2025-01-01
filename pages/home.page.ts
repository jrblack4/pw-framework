import { type IHomePage } from '../interfaces/IHomePage';
import { type Page } from '@playwright/test';
import { BasePage } from '../pages/base-page';
import { locators.json } from '../locators.json' assert { type: "json" }

export class HomePage extends BasePage implements IHomePage {
 constructor(page: Page) {
    super(page);
  }

  async clickGetStarted(): Promise<void> {

  }
}
