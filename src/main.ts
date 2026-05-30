import { CLI } from './presentation/cli/CLI.js';
import { VRChatApiClient } from './infrastructure/vrchat/VRChatApiClient.js';
import { GetInactiveFriendsUseCase } from './application/usecases/GetInactiveFriendsUseCase.js';

async function main() {
  const cli = new CLI();
  const command = cli.getCommand();
  const twoFactorCode = await cli.askTwoFactorCode();
  const vrchatApiClient = new VRChatApiClient(twoFactorCode);
  const client = vrchatApiClient.client;

  const commandList: Record<string, () => Promise<void>> = {
    'inactive friends': async () => {
      const useCase = new GetInactiveFriendsUseCase(client);
      await useCase.execute();
    },
  };

  const execute = commandList[command];

  if (!execute) {
    console.log('Unknown command.');

    return;
  }

  await execute();
}

main().catch(console.error);
