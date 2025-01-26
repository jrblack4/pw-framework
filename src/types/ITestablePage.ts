export interface ITestablePage {
  goTo(url: string): Promise<void>;
  getTitle(): Promise<string>;
  getUrl(): Promise<string>;
}
