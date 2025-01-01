import { LocatorResolver } from '../interfaces/locatorResolver';
import { Page, Locator } from '@playwright/test';
import locators from './locators.json';

export class PlaywrightLocatorResolver implements LocatorResolver {
  constructor(private page: Page) {}

  resolve(loca)
}
