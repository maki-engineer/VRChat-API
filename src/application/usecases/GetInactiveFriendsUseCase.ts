import { VRChat } from 'vrchat';
import { UserId } from '../../domain/valueObjects/UserId.js';
import type { Friend } from '../../domain/entities/Friend.js';
import type { UseCaseInterface } from '../../domain/interfaces/UseCaseInterface.js';

/**
 * @package src\application\usecases
 */
export class GetInactiveFriendsUseCase implements UseCaseInterface {
  constructor(private readonly client: VRChat) {}

  /**
   * 1ヶ月以上会っていないフレンド一覧を取得
   */
  async execute() {
    const result = await this.client.getFriends();

    if (result.data === undefined) {
      return [];
    }

    const friends = result.data;

    const inactiveFriends: Friend[] = friends.map((friend) => {
      return {
        id: new UserId(friend.id),
        displayName: friend.displayName,
        lastActivity: friend.last_activity,
        lastLogin: friend.last_login,
      };
    });

    console.log(inactiveFriends);
  }
}
