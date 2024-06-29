import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import {
  getFriends,
  getTapUser,
  getUser,
  getUserCards,
  getUserTasks,
  postCard,
  postLevel,
  postNetwork,
  postStart,
  sync,
} from '../lib/api';
import { useInterval } from 'react-use';
import { getInvitedBy } from '../lib/utils';
import WebApp from '@twa-dev/sdk';
import i18n from '../lib/i18n';
import { Event } from '../lib/events';

type FrogsContextInterface = {
  loading: boolean;
  config: Config | Record<string, never>;
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
  moodProgress: number;
  nextLevelPrice: number | null;
  friends: Friend[];
  tasks: UserTask[];
  event: Event;
  setEvent: Dispatch<SetStateAction<Event>>;
  clearEvent: () => void;
  updateNetwork: (networkId: string) => Promise<void>;
  updateFriendsList: () => Promise<void>;
  updateUserTasks: () => Promise<void>;
  handleTap: () => void;
  buyCard: (card: UserCard) => Promise<void>;
  updateCards: () => Promise<void>;
  upgradeLevel: () => void;
};

const FrogsContext = createContext<FrogsContextInterface>({
  loading: true,
  config: {},
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
  moodProgress: 0,
  nextLevelPrice: 0,
  friends: [],
  tasks: [],
  event: null,
  setEvent: () => null,
  clearEvent: () => null,
  updateNetwork: async () => Promise.resolve(),
  updateFriendsList: async () => Promise.resolve(),
  updateUserTasks: async () => Promise.resolve(),
  handleTap: () => null,
  buyCard: async () => Promise.resolve(),
  updateCards: () => Promise.resolve(),
  upgradeLevel: () => null,
});

export type Config = {
  id: string;
  energyRecoveryRate: number;
  title: string;
  languages: { [key: string]: string };
  levels: Level[];
  networks: Network[];
  profitPerHourOfflineLimitHours: number;
  syncPeriod: number;
};

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

  categoryName: string;
  coverNaUrl: string;
  coverUrl: string;
  description: string;
  id: number;
  isBlockedBy: {
    cardId: number;
    cardLevel: number;
    moreFriendsCount: null | number;
  };
  level: number;
  name: string;
  nextLevelPrice: number;
  nextLevelProfitPerHour: number;
  profitPerHour: number;
};

export type Level = {
  number: number;
  price: number;
  earnPerTap: number;
  energyLimit: number;
};

export type Network = {
  id: string;
  title: string;
  factor: number;
};

export type Friend = {
  id: number;
  level: number;
  balance: number;
  displayAs: string;
  isPremium: boolean;
  bonus: number;
};

export type Leader = {
  id: number;
  balance: number;
  displayAs: string;
};

export type UserTask = {
  bonus: number;
  id: string;
  isCompleted: boolean;
  title: string;
  url: string;
};

export type User = {
  id: number;
  displayAs: string;
  earnPerTap: number;
  profitPerHour: number;
  energyLimit: number;
  level: number;
  networkId: null | string;
};

export const useFrogs = () => useContext(FrogsContext);

interface FrogsProviderProps {
  children: React.ReactNode;
}

export const FrogsProvider: React.FC<FrogsProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useLocalStorageState<Config | Record<string, never>>('config', { defaultValue: {} });
  const [user, setUser] = useLocalStorageState<User | Record<string, never>>('user', { defaultValue: {} });
  const [balance, setBalance] = useLocalStorageState<number>('balance', { defaultValue: 0 });
  const [taps, setTaps] = useLocalStorageState<number>('taps', { defaultValue: 0 });
  const [lastTaps, setLastTaps] = useLocalStorageState<number>('lastTaps', { defaultValue: 0 });
  const [energy, setEnergy] = useLocalStorageState<number>('energy', { defaultValue: 0 });
  const [maxEnergy, setMaxEnergy] = useLocalStorageState<number>('maxEnergy', { defaultValue: 0 });
  const [earnPerTap, setEarnPerTap] = useLocalStorageState<number>('earnPerTap', { defaultValue: 0 });
  const [profitPerHour, setProfitPerHour] = useLocalStorageState<number>('profitPerHour', { defaultValue: 0 });
  const [level, setLevel] = useLocalStorageState<number>('level', { defaultValue: 1 });
  const [userCards, setUserCards] = useLocalStorageState<UserCard[]>('userCards', { defaultValue: [] });
  const [maxLevel, setMaxLevel] = useLocalStorageState<number>('maxLevel', { defaultValue: 0 });
  const [progress, setProgress] = useLocalStorageState<number>('progress', { defaultValue: 0 });
  const [moodProgress, setMoodProgress] = useLocalStorageState<number>('moodProgress', { defaultValue: 0 });
  const [lastTap, setLastTap] = useLocalStorageState<number>('lastTap', { defaultValue: 0 });
  const [nextLevelPrice, setNextLevelPrice] = useLocalStorageState<number | null>('nextLevelPrice', {
    defaultValue: null,
  });
  const [friends, setFriends] = useLocalStorageState<Friend[]>('friends', { defaultValue: [] });
  const [tasks, setTasks] = useLocalStorageState<UserTask[]>('tasks', { defaultValue: [] });
  const [event, setEvent] = useState<Event>(null);

  useEffect(() => {
    if (nextLevelPrice) setProgress(balance > nextLevelPrice ? 100 : (balance / nextLevelPrice) * 100);
  }, [balance, nextLevelPrice]);

  useEffect(() => {
    const nextLevel = config.levels?.find((item) => item.number === level + 1);
    if (!nextLevel) {
      setNextLevelPrice(null);
      return;
    }
    setNextLevelPrice(nextLevel.price);
  }, [level]);

  useEffect(() => {
    const readConfig = async () => {
      console.debug({ i18n });
      console.debug({ initDataUnsafe: WebApp.initDataUnsafe });
      const start: {
        cardsCatalog: CardCategory[];
        config: Config;
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
      const { config, user, userCards, friends } = start;
      setConfig(config);
      setMaxLevel(config.levels.length);

      const { hasMoreItems, list } = friends;
      setFriends(list);

      const { earnPerTap, profitPerHour, energyLimit, level } = user;
      setUser(user);
      setEarnPerTap(earnPerTap);
      setProfitPerHour(profitPerHour);
      setMaxEnergy(energyLimit);
      setLevel(level);
      setUserCards(userCards);

      const userTapData: {
        balance: number;
        balanceDiffSinceLast: number;
        energy: number;
        id: number;
        level: number;
        pph: number;
        pphBalance: number;
        updatedAtUnixMs: number;
      } = await getTapUser();
      console.debug(userTapData);
      setBalance(userTapData.balance);
      setEnergy(userTapData.energy);
      setLastTap(userTapData.updatedAtUnixMs);
      setTaps(0);
      setLastTaps(0);

      if (userTapData.balanceDiffSinceLast > 0) {
        setEvent({
          type: 'balanceUp',
          balanceDiffSinceLast: userTapData.balanceDiffSinceLast,
        });
      }
      document.getElementById('preloader')?.remove();
      setLoading(false);
    };

    readConfig().then();
  }, []);

  useEffect(() => {
    if (!loading && moodProgress === 0) {
      setEvent({
        type: 'bored',
      });
      setProfitPerHour(0);
    }
  }, [moodProgress, loading]);

  useInterval(() => {
    setBalance((prevBalance) => prevBalance + profitPerHour / 3600);

    const minutesPassed = (Date.now() - lastTap) / 1000 / 60;
    const time = config.profitPerHourOfflineLimitHours * 60;
    const minutesLeft = minutesPassed > time ? 0 : time - minutesPassed;
    setMoodProgress((minutesLeft / time) * 100);
  }, 1000);

  useInterval(() => {
    if (!config.energyRecoveryRate) return;
    setEnergy((prevEnergy) =>
      prevEnergy + config.energyRecoveryRate < maxEnergy ? prevEnergy + config.energyRecoveryRate : maxEnergy
    );
  }, 1000);

  useInterval(async () => {
    if (taps > lastTaps) {
      const response = await sync(taps - lastTaps);
      console.debug(response);
      if (!response.times.error) setLastTaps(taps);
    }
  }, 1000 * (config.syncPeriod || 10));

  const clearEvent = async () => {
    setEvent(null);
  };

  const updateNetwork = async (networkId: string) => {
    await postNetwork(networkId);
    const user = await getUser();
    console.debug(user);
    setUser(user);
    setProfitPerHour(user.profitPerHour);
  };

  const updateFriendsList = async () => {
    const response = await getFriends();
    if (response.list) setFriends(response.list);
  };

  const updateUserTasks = async () => {
    const response = await getUserTasks();
    if (response.list) setTasks(response.list);
  };

  const handleTap = () => {
    if (energy >= earnPerTap) {
      setTaps((prevTaps) => prevTaps + 1);
      setBalance((prevBalance) => prevBalance + earnPerTap);
      setEnergy((prevEnergy) => prevEnergy - earnPerTap);
      setMoodProgress(100);
      setLastTap(Date.now());
      setProfitPerHour(user.profitPerHour);
    }
  };

  const buyCard = async (card: UserCard) => {
    const cardsData = await postCard(card.id);
    console.debug(cardsData);
    if (cardsData) {
      setUserCards(cardsData);
      setBalance((prevBalance) => prevBalance - card.nextLevelPrice);
      setProfitPerHour((prevProfitPerHour) => prevProfitPerHour + card.nextLevelProfitPerHour - card.profitPerHour);
    }
  };

  const updateCards = async () => {
    const cards = await getUserCards();
    console.debug(cards);
    setUserCards(cards);
  };

  const upgradeLevel = async () => {
    if (!nextLevelPrice || balance < nextLevelPrice) return;

    const nextLevel = config.levels?.find((item) => item.number === level + 1);
    if (!nextLevel) {
      throw new Error('Should not happen');
    }
    if ((await postLevel(level + 1)) === false) {
      return;
    }
    setLevel((prevLevel) => prevLevel + 1);
    setEarnPerTap(nextLevel.earnPerTap);
    setMaxEnergy(nextLevel.energyLimit);
    setEvent({
      type: 'levelUp',
      maxEnergyGain: nextLevel.energyLimit - maxEnergy,
      earnPerTapGain: nextLevel.earnPerTap - earnPerTap,
    });
  };

  return (
    <FrogsContext.Provider
      value={{
        loading,
        config,
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
        moodProgress,
        nextLevelPrice,
        friends,
        tasks,
        event,
        setEvent,
        clearEvent,
        updateNetwork,
        updateFriendsList,
        updateUserTasks,
        handleTap,
        buyCard,
        updateCards,
        upgradeLevel,
      }}
    >
      {children}
    </FrogsContext.Provider>
  );
};
