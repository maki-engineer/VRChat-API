import { VRChat } from 'vrchat';
import { env } from '../../config/env.js';

/**
 * @package src\infrastructure\vrchat
 */
export class VRChatApiClient {
  private readonly _client: VRChat;

  constructor(twoFactorCode: string) {
    this._client = new VRChat({
      application: {
        name: 'VRChatApiClient',
        version: '1.0.0',
        contact: env.vrchat.username,
      },
      authentication: {
        credentials: {
          username: env.vrchat.username,
          password: env.vrchat.password,
          twoFactorCode: twoFactorCode,
        },
      },
    });
  }

  get client() {
    return this._client;
  }
}
