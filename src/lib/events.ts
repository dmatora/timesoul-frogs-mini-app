export type Event = null | LevelUpEvent | BalanceUpEvent;

export type LevelUpEvent = {
  type: 'levelUp';
  maxEnergyGain: number;
  earnPerTapGain: number;
};

export type BalanceUpEvent = {
  type: 'balanceUp';
  balanceDiffSinceLast: number;
};

export const isLevelUpEvent = (event: Event): event is LevelUpEvent => event?.type === 'levelUp';
export const isBalanceUpEvent = (event: Event): event is BalanceUpEvent => event?.type === 'balanceUp';
