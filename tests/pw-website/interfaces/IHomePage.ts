import type { ITestablePage } from '../../../src/types/ITestablePage';

export interface IHomePage extends ITestablePage {
  clickGetStarted(): Promise<void>;
}
