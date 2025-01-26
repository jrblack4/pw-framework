import { ITestablePage } from '../../../src/types/ITestablePage';
/**
 * Definition for a LoginPage
 *
 * @interface
 */

export interface ILoginPage extends ITestablePage {
  fillUsername(username: string): Promise<void>;
  fillPassword(password: string): Promise<void>;
  login(username: string, password: string): Promise<void>;
}
