import React, { createContext, useContext, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { getFriends, postCard, postLevel, postStart, sync } from '../lib/api';
import { useInterval } from 'react-use';
import { getInvitedBy } from '../lib/utils';
import WebApp from '@twa-dev/sdk';

type FrogsContextInterface = {
  user: User | Record<string, never>;
  balance: number;
  energy: number;
  maxEnergy: number;
  earnPerTap: number;
  profitPerHour: number;
  level: number;
  userCards: UserCard[];
  maxLevel: number;
  progress: number;
  nextLevelPrice: number | null;
  cardCategories: CardCategory[];
  friends: Friend[];
  updateFriendsList: () => void;
  handleTap: () => void;
  buyCard: (cardId: string) => Promise<void>;
  upgradeLevel: () => void;
};

const FrogsContext = createContext<FrogsContextInterface>({
  user: {},
  balance: 0,
  energy: 0,
  maxEnergy: 0,
  earnPerTap: 0,
  profitPerHour: 0,
  level: 0,
  userCards: [],
  maxLevel: 0,
  progress: 0,
  nextLevelPrice: 0,
  cardCategories: [],
  friends: [],
  updateFriendsList: () => null,
  handleTap: () => null,
  buyCard: async () => Promise.resolve(),
  upgradeLevel: () => null,
});

export type CardCategory = {
  id: string;
  title: string;
  cards: Card[];
};

export type Card = {
  activatesAt: Date;
  categoryId: string;
  coverUrl: string;
  expiresAt: Date;
  id: string;
  levels: {
    number: number;
    price: number;
    profitPerHour: number;
  }[];
  title: string;
};

export type UserCard = {
  card_id: string;
  level_number: number;
};

export type Level = {
  number: number;
  price: number;
  earnPerTap: number;
  energyLimit: number;
};

export type Friend = {
  id: number;
  level: number;
  balance: number;
  displayAs: string;
  isPremium: boolean;
  bonus: number;
};

export type User = {
  earnPerTap: number;
  profitPerHour: number;
  energyLimit: number;
  level: number;
  subscribeToOurTg: boolean;
  subscribeToOurX: boolean;
};

export const useFrogs = () => useContext(FrogsContext);

interface FrogsProviderProps {
  children: React.ReactNode;
}

export const FrogsProvider: React.FC<FrogsProviderProps> = ({ children }) => {
  const [user, setUser] = useLocalStorageState<User | Record<string, never>>('user', { defaultValue: {} });
  const [balance, setBalance] = useLocalStorageState<number>('balance', { defaultValue: 0 });
  const [taps, setTaps] = useLocalStorageState<number>('taps', { defaultValue: 0 });
  const [lastTaps, setLastTaps] = useLocalStorageState<number>('lastTaps', { defaultValue: 0 });
  const [energy, setEnergy] = useLocalStorageState<number>('energy', { defaultValue: 0 });
  const [maxEnergy, setMaxEnergy] = useLocalStorageState<number>('maxEnergy', { defaultValue: 0 });
  const [earnPerTap, setEarnPerTap] = useLocalStorageState<number>('earnPerTap', { defaultValue: 0 });
  const [profitPerHour, setProfitPerHour] = useLocalStorageState<number>('profitPerHour', { defaultValue: 0 });
  const [level, setLevel] = useLocalStorageState<number>('level', { defaultValue: 0 });
  const [userCards, setUserCards] = useLocalStorageState<UserCard[]>('userCards', { defaultValue: [] });
  const [maxLevel, setMaxLevel] = useLocalStorageState<number>('maxLevel', { defaultValue: 0 });
  const [progress, setProgress] = useLocalStorageState<number>('progress', { defaultValue: 0 });
  const [nextLevelPrice, setNextLevelPrice] = useLocalStorageState<number | null>('nextLevelPrice', {
    defaultValue: null,
  });
  const [cardCategories, setCardCategories] = useLocalStorageState<CardCategory[]>('cardCategories', {
    defaultValue: [],
  });
  const [levels, setLevels] = useLocalStorageState<Level[]>('levels', { defaultValue: [] });
  const [friends, setFriends] = useLocalStorageState<Friend[]>('friends', { defaultValue: [] });
  const [syncPeriod, setSyncPeriod] = useLocalStorageState<number>('syncPeriod', { defaultValue: 0 });
  const [energyRecoveryRate, setEnergyRecoveryRate] = useLocalStorageState<number>('energyRecoveryRate', {
    defaultValue: 0,
  });

  useEffect(() => {
    if (nextLevelPrice) setProgress(balance > nextLevelPrice ? 100 : (balance / nextLevelPrice) * 100);
  }, [balance, nextLevelPrice]);

  useEffect(() => {
    const nextLevel = levels.find((item) => item.number === level + 1);
    if (!nextLevel) {
      setNextLevelPrice(null);
      return;
    }
    setNextLevelPrice(nextLevel.price);
  }, [level]);

  useEffect(() => {
    const readConfig = async () => {
      console.debug({ initDataUnsafe: WebApp.initDataUnsafe });
      const start: {
        cardsCatalog: CardCategory[];
        config: {
          syncPeriod: number;
          energyRecoveryRate: number;
          levels: Level[];
        };
        friends: {
          hasMoreItems: true;
          list: Friend[];
        };
        user: User;
        userCards: UserCard[];
      } = await postStart(getInvitedBy());
      if (start === undefined) {
        console.log('Start is broken, operating in offline mode');
        return;
      }
      console.debug(start);
      const { cardsCatalog, config, user, userCards, friends } = start;
      setCardCategories(cardsCatalog);
      setLevels(config.levels);
      setMaxLevel(config.levels.length);
      setSyncPeriod(config.syncPeriod);
      setEnergyRecoveryRate(config.energyRecoveryRate);

      const { hasMoreItems, list } = friends;
      setFriends(list);
      const { earnPerTap, profitPerHour, energyLimit, level } = user;
      setUser(user);
      setEarnPerTap(earnPerTap);
      setProfitPerHour(profitPerHour);
      setMaxEnergy(energyLimit);
      setLevel(level);
      setUserCards(userCards);

      const syncData = await sync(0);
      setBalance(syncData.user.balance);
      setEnergy(syncData.user.energy);
    };

    readConfig().then();
  }, []);

  useInterval(() => {
    setEnergy((prevEnergy) =>
      prevEnergy + energyRecoveryRate < maxEnergy ? prevEnergy + energyRecoveryRate : maxEnergy
    );
  }, 1000);

  useInterval(async () => {
    if (taps > lastTaps) {
      const response = await sync(taps - lastTaps);
      console.debug(response);
      if (!response.times.error) setLastTaps(taps);
    }
  }, 1000 * syncPeriod);

  const updateFriendsList = async () => {
    const response = await getFriends();
    if (response.list) setFriends(response.list);
  };

  const handleTap = () => {
    if (energy > 0) {
      setTaps((prevTaps) => prevTaps + 1);
      setBalance((prevBalance) => prevBalance + earnPerTap);
      setEnergy((prevEnergy) => prevEnergy - earnPerTap);
    }
  };

  const buyCard = async (cardId: string) => {
    const response = await postCard(cardId);
    console.debug(response);
    let found = false;
    const cards = userCards.map((userCard) => {
      if (userCard.card_id === cardId) {
        found = true;
        userCard.level_number++;
      }
      return userCard;
    });
    if (!found) {
      cards.push({ card_id: cardId, level_number: 1 });
    }
    setUserCards(cards);
  };

  const upgradeLevel = async () => {
    if (!nextLevelPrice || balance < nextLevelPrice) return;

    const nextLevel = levels.find((item) => item.number === level + 1);
    if (!nextLevel) {
      throw new Error('Should not happen');
    }
    if ((await postLevel(level + 1)) === false) {
      return;
    }
    setLevel((prevLevel) => prevLevel + 1);
    setEarnPerTap(nextLevel.earnPerTap);
    setMaxEnergy(nextLevel.energyLimit);
  };

  return (
    <FrogsContext.Provider
      value={{
        user,
        balance,
        energy,
        maxEnergy,
        earnPerTap,
        profitPerHour,
        level,
        userCards,
        maxLevel,
        progress,
        nextLevelPrice,
        cardCategories,
        friends,
        updateFriendsList,
        handleTap,
        buyCard,
        upgradeLevel,
      }}
    >
      {children}
    </FrogsContext.Provider>
  );
};
