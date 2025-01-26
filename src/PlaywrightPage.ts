import type { ITestablePage } from '../src/types/ITestablePage';
import { Page } from '@playwright/test';

export abstract class PlaywrightPage implements ITestablePage {
  protected page: Page;
  protected url: string = '/';

  constructor(page: Page) {
    this.page = page;
  }

  async goTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
  
  async getUrl(): Promise<string> {
    return this.page.url();
  }
  //
  // async rawPage(): Promise<Page> {
  //   return this.page;
  // }
}
