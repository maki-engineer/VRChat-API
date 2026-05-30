import type { UserId } from '../../domain/valueObjects/UserId.js';

export type Friend = {
  id: UserId;
  displayName: string;
  lastActivity: Date | null;
  lastLogin: Date | null;
};
