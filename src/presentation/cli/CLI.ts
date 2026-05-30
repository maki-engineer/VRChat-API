import readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

/**
 * @package src\presentation\cli
 */
export class CLI {
  /**
   * VRChat APIを利用する際に必要な二段階認証コードを取得
   *
   * @return {Promise<string>}
   */
  async askTwoFactorCode(): Promise<string> {
    const rl = readline.createInterface({
      input: stdin,
      output: stdout,
    });

    const code = await rl.question('2FA Code: ');

    rl.close();

    return code.trim();
  }

  /**
   * コマンドを取得
   *
   * @return {string}
   */
  getCommand(): string {
    const argvData = process.argv.slice(2);

    return argvData.join(' ').trim();
  }
}
