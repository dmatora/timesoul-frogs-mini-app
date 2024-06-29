import { UserCard } from '../contexts/FrogsContext';

export type Event = null | LevelUpEvent | BalanceUpEvent | CheckingCardEvent | BallanceTipEvent | BoredEvent;

export type LevelUpEvent = {
  type: 'levelUp';
  maxEnergyGain: number;
  earnPerTapGain: number;
};

export type BalanceUpEvent = {
  type: 'balanceUp';
  balanceDiffSinceLast: number;
};

export type BallanceTipEvent = {
  type: 'balanceTip';
};

export type CheckingCardEvent = {
  type: 'checkingCard';
  card: UserCard;
};

export type BoredEvent = {
  type: 'bored';
};

export const isLevelUpEvent = (event: Event): event is LevelUpEvent => event?.type === 'levelUp';
export const isBalanceUpEvent = (event: Event): event is BalanceUpEvent => event?.type === 'balanceUp';
export const isBalanceTipEvent = (event: Event): event is BallanceTipEvent => event?.type === 'balanceTip';
export const isCheckingCardEvent = (event: Event): event is CheckingCardEvent => event?.type === 'checkingCard';
export const isBoredEvent = (event: Event): event is BoredEvent => event?.type === 'bored';
