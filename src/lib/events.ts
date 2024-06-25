import { UserCard } from '../contexts/FrogsContext';

export type Event = null | LevelUpEvent | BalanceUpEvent | CheckingCardEvent;

export type LevelUpEvent = {
  type: 'levelUp';
  maxEnergyGain: number;
  earnPerTapGain: number;
};

export type BalanceUpEvent = {
  type: 'balanceUp';
  balanceDiffSinceLast: number;
};

export type CheckingCardEvent = {
  type: 'checkingCard';
  card: UserCard;
};

export const isLevelUpEvent = (event: Event): event is LevelUpEvent => event?.type === 'levelUp';
export const isBalanceUpEvent = (event: Event): event is BalanceUpEvent => event?.type === 'balanceUp';
export const isCheckingCardEvent = (event: Event): event is CheckingCardEvent => event?.type === 'checkingCard';
