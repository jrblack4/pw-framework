import type { ITestablePage } from './types/ITestablePage'

export abstract class AbstractPage implements ITestablePage {
  abstract goTo(url: string): Promise<void>;
  abstract getTitle(): Promise<string>;
  abstract getUrl(): Promise<string>;
}
