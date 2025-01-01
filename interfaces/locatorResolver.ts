import { type Locator } from '@playwright/test';

export interface LocatorResolver {
  resolve(locatorKey: string): Locator;
}

export interface LocatorHandler {
  click(locatorKey: string): Promise<void>;
  fill(locatorKey: string, value: string): Promise<void>;
}
