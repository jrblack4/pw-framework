export interface IBasePage {
  goto(url: string): Promise<void>;
  getPageTitle(): Promise<string>;
  waitForElement(selector: string, timeout?: number): Promise<void>;
}
