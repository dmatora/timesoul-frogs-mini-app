import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from 'react';
import * as Sentry from '@sentry/react';
import {
  getFriends,
  getTapUser,
  getUser,
  getUserCards,
  getUserTasks,
  postCard,
  postFeeding,
  postLevel,
  postNetwork,
  postStart,
  sync,
} from '../lib/api';
import { useInterval } from 'react-use';
import { exponentialDelay, getInvitedBy, metrikaEventAppCrashed, metrikaEventAppStarted, sleep } from '../lib/utils';
import WebApp from '@twa-dev/sdk';
import i18n from '../lib/i18n';
import { Event } from '../lib/events';
import { notificationEmit } from '../controllers/NotificationsController';
import { useTranslation } from 'react-i18next';

type FrogsContextInterface = {
  loading: boolean;
  config: Config | Record<string, never>;
  user: User | Record<string, never>;
  taps: number;
  balance: number;
  energy: number;
  maxEnergy: number;
  earnPerTap: number;
  profitPerHour: number;
  level: number;
  dishes: Dish[];
  userCards: UserCard[];
  maxLevel: number;
  progress: number;
  moodProgress: number;
  satietyProgress: number;
  nextLevelPrice: number | null;
  lastFriendsUpdate: number;
  friends: Friend[];
  friendsCount: number;
  tasks: UserTask[];
  event: Event;
  setEvent: Dispatch<SetStateAction<Event>>;
  updateBalance: () => Promise<void>;
  clearEvent: () => void;
  updateNetwork: (networkId: string) => Promise<void>;
  updateFriendsList: () => Promise<void>;
  updateUserTasks: () => Promise<UserTask[]>;
  handleTap: () => void;
  buyCard: (card: UserCard) => Promise<void>;
  feedFrog: (dish: Dish) => Promise<void>;
  updateCards: () => Promise<void>;
  upgradeLevel: () => Promise<void>;
};

const FrogsContext = createContext<FrogsContextInterface>({
  loading: true,
  config: {},
  user: {},
  taps: 0,
  balance: 0,
  energy: 0,
  maxEnergy: 0,
  earnPerTap: 0,
  profitPerHour: 0,
  level: 0,
  dishes: [],
  userCards: [],
  maxLevel: 0,
  progress: 0,
  moodProgress: 0,
  satietyProgress: 0,
  nextLevelPrice: 0,
  lastFriendsUpdate: 0,
  friends: [],
  friendsCount: 0,
  tasks: [],
  event: null,
  setEvent: () => null,
  updateBalance: async () => Promise.resolve(),
  clearEvent: () => null,
  updateNetwork: async () => Promise.resolve(),
  updateFriendsList: async () => Promise.resolve(),
  updateUserTasks: async () => Promise.resolve([]),
  handleTap: () => null,
  buyCard: async () => Promise.resolve(),
  feedFrog: async () => Promise.resolve(),
  updateCards: () => Promise.resolve(),
  upgradeLevel: () => Promise.resolve(),
});

export type Config = {
  id: string;
  energyRecoveryRate: number;
  title: string;
  languages: { [key: string]: string };
  levels: Level[];
  networks: Network[];
  profitPerHourOfflineLimitHours: number;
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
  categoryName: string;
  coverNaUrl: string;
  coverUrl: string;
  description: string;
  id: number;
  isBlockedBy: null | {
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

export type Dish = {
  bonus: number;
  calories: number;
  coverNaUrl: string;
  coverUrl: string;
  id: number;
  isBlockedBy: null | {
    moreFriendsCount: null | number;
    timeout: null | number;
  };
  name: string;
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
  coverUrl: string;
};

export type User = {
  id: number;
  displayAs: string;
  earnPerTap: number;
  profitPerHour: number;
  energyLimit: number;
  level: number;
  lastFeedingAt: number;
  lastFeedingCalories: number;
  friendsCount: number;
  networkId: null | string;
};

interface IBalance {
  balance: number;
  balanceDiffSinceLast: number;
  energy: number;
  id: number;
  level: number;
  pph: number;
  updatedAtUnixMs: number;
}
interface IApp {
  cardsCatalog: CardCategory[];
  config: Config;
  friends: {
    hasMoreItems: boolean;
    list: Friend[];
  };
  tasks: UserTask[];
  user: User;
  dishes: Dish[];
  userCards: UserCard[];
}

export const useFrogs = () => useContext(FrogsContext);

interface FrogsProviderProps {
  children: React.ReactNode;
}

const sentryCaptureMessage = (message: string) =>
  Sentry.captureMessage(message, {
    user: {
      id: WebApp.initDataUnsafe?.user?.id,
    },
  });

export const FrogsProvider: React.FC<FrogsProviderProps> = ({ children }) => {
  const readingConfigRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useState<Config | Record<string, never>>({});
  const [user, setUser] = useState<User | Record<string, never>>({});
  const [balance, setBalance] = useState(0);
  const [taps, setTaps] = useState(0);
  const [lastTaps, setLastTaps] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [maxEnergy, setMaxEnergy] = useState(0);
  const [earnPerTap, setEarnPerTap] = useState(0);
  const [profitPerHour, setProfitPerHour] = useState(0);
  const [level, setLevel] = useState(1);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [userCards, setUserCards] = useState<UserCard[]>([]);
  const [maxLevel, setMaxLevel] = useState(0);
  const [progress, setProgress] = useState(0);
  const [moodProgress, setMoodProgress] = useState(0);
  const [satietyProgress, setSatietyProgress] = useState(0);
  const [lastTap, setLastTap] = useState(0);
  const [feedTime, setFeedTime] = useState(0);
  const [calories, setCalories] = useState(10800);
  const [nextLevelPrice, setNextLevelPrice] = useState<number | null>(null);
  const [lastFriendsUpdate, setLastFriendsUpdate] = useState(0);
  const [friends, setFriends] = useState<Friend[]>([]);
  const [friendsCount, setFriendsCount] = useState(0);
  const [tasks, setTasks] = useState<UserTask[]>([]);
  const [event, setEvent] = useState<Event>(null);
  const { t } = useTranslation();

  const updateTapData = async (): Promise<IBalance> => {
    const userTapData: IBalance = await getTapUser();

    console.debug(userTapData);
    setBalance(userTapData.balance);
    setProfitPerHour(userTapData.pph);
    setEnergy(userTapData.energy);
    setLastTap(userTapData.updatedAtUnixMs);
    setTaps(0);
    setLastTaps(0);
    return userTapData;
  };

  const updateBalance = async () => {
    await updateTapData();
  };

  const startWithAttempts = async (attempt: number): Promise<boolean> => {
    await sleep(exponentialDelay(attempt));
    const start: IApp = await postStart(getInvitedBy());
    if (start === undefined) {
      sentryCaptureMessage(`startWithAttempts ${attempt} - main service failed'`);
      return false;
    }
    console.debug(start);

    const userTapData: IBalance = await updateTapData();

    if (userTapData === undefined) {
      sentryCaptureMessage(`startWithAttempts ${attempt} - balance service failed'`);
      return false;
    }

    const { config, user, dishes, tasks, userCards, friends } = start;
    setConfig(config);
    setMaxLevel(config.levels.length);
    setDishes(dishes);
    setTasks(tasks);
    setUserCards(userCards);
    if (user.lastFeedingAt) {
      setFeedTime(user.lastFeedingAt * 1000);
      setCalories(user.lastFeedingCalories);
      updateSatietyProgress(user.lastFeedingAt * 1000, user.lastFeedingCalories);
    } else {
      setFeedTime(0);
    }

    const { hasMoreItems, list } = friends;
    setFriends(list);
    setFriendsCount(user.friendsCount);

    const { earnPerTap, energyLimit, level } = user;
    setUser(user);
    setEarnPerTap(earnPerTap);

    // @todo: приоритет серверу баланса на энергию, pph и баланса
    // setProfitPerHour(profitPerHour);
    setMaxEnergy(energyLimit);
    setLevel(level);
    updateLevelProgress(updateNextLevelPrice(start.config, level));
    updateMoodProgress(config.profitPerHourOfflineLimitHours, userTapData.updatedAtUnixMs);

    if (userTapData.balanceDiffSinceLast > 0) {
      setEvent({
        type: 'balanceUp',
        balanceDiffSinceLast: userTapData.balanceDiffSinceLast,
      });
    }

    return true;
  };

  useEffect(() => {
    const readConfig = async () => {
      readingConfigRef.current = true;
      console.debug({ i18n });
      console.debug({ initDataUnsafe: WebApp.initDataUnsafe });

      let isStarted = false;

      try {
        for (let x = 0; x < 5; x++) {
          if (!isStarted) isStarted = await startWithAttempts(x);
        }
      } catch (e: any) {
        if (e?.message === 'Authentication error: Invalid auth token') {
          sentryCaptureMessage(`Authentication error`);
          return;
        }
        throw e;
      }

      if (!isStarted) {
        metrikaEventAppCrashed();
        console.log('Venom Frogs failed to start :(');
        sentryCaptureMessage('Venom Frogs failed to start :(');
        return;
      }

      document.getElementById('preloader')?.remove();
      setLoading(false);
      metrikaEventAppStarted(user.id);
    };

    if (!readingConfigRef.current) {
      readConfig().then();
      return;
    }
    if (window.location.hostname !== 'localhost') sentryCaptureMessage('Double fire for useEffectOnce detected');
  }, []);

  useEffect(() => {
    if (!loading && satietyProgress === 0) {
      setEvent({
        type: 'hungry',
      });
      const unlockedDishes = dishes.map((dish) => {
        if (!dish.isBlockedBy?.moreFriendsCount) dish.isBlockedBy = null;
        return dish;
      });
      setDishes(unlockedDishes);
    }
  }, [satietyProgress, loading]);

  useEffect(() => {
    if (!loading && moodProgress === 0) {
      setEvent({
        type: 'bored',
      });
      setProfitPerHour(0);
    }
  }, [moodProgress, loading]);

  const updateNextLevelPrice = (config: Config | Record<string, never>, level: number) => {
    const nextLevel = config.levels?.find((item) => item.number === level + 1);
    if (!nextLevel) {
      setNextLevelPrice(null);
      return null;
    }
    setNextLevelPrice(nextLevel.price);
    return nextLevel.price;
  };

  const updateLevelProgress = (nextLevelPrice: number | null) => {
    if (!nextLevelPrice) {
      setProgress(100);
      return;
    }
    if (nextLevelPrice) setProgress(balance > nextLevelPrice ? 100 : (balance / nextLevelPrice) * 100);
  };

  const updateMoodProgress = (profitPerHourOfflineLimitHours: number, lastTap: number) => {
    const minutesPassed = (Date.now() - lastTap) / 1000 / 60;
    const time = profitPerHourOfflineLimitHours * 60;
    const minutesLeft = minutesPassed > time ? 0 : time - minutesPassed;
    setMoodProgress((minutesLeft / time) * 100);
  };

  const updateSatietyProgress = (feedTime: number, calories: number) => {
    const secondsPassedAfterMeal = (Date.now() - feedTime) / 1000;
    const secondsLeftBeforeNextMeal = secondsPassedAfterMeal > calories ? 0 : calories - secondsPassedAfterMeal;
    setSatietyProgress((secondsLeftBeforeNextMeal / calories) * 100);
  };

  useEffect(() => {
    updateLevelProgress(nextLevelPrice);
  }, [balance, nextLevelPrice]);

  useEffect(() => {
    updateNextLevelPrice(config, level);
  }, [level]);

  useInterval(() => {
    setBalance((prevBalance) => prevBalance + profitPerHour / 3600);
    updateMoodProgress(config.profitPerHourOfflineLimitHours, lastTap);
    updateSatietyProgress(feedTime, calories);
  }, 1000);

  useInterval(() => {
    if (!config.energyRecoveryRate) return;
    setEnergy((prevEnergy) =>
      prevEnergy + config.energyRecoveryRate < maxEnergy ? prevEnergy + config.energyRecoveryRate : maxEnergy
    );
  }, 1000);

  const syncTaps = async () => {
    const now = Date.now();
    const isNotTappingNow = (now - lastTap) / 1000 > 2;

    // console.log('isNotTappingNow', isNotTappingNow, (now - lastTap) / 1000);

    if (isNotTappingNow && taps > 0) {
      const response = await sync(taps - lastTaps);
      console.debug(response);

      if (!response.times.error) {
        setLastTaps(taps);
        setLastTap(now);
        setTaps(0);
      }
    }
  };

  useInterval(syncTaps, 500);

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
    setLastFriendsUpdate(Date.now);
    const friends: { hasMoreItems: boolean; list: Friend[] } = await getFriends();
    const user: User = await getUser();
    if (friends.list) {
      if (user.friendsCount > friendsCount) {
        await updateCards();
        await updateTapData();
      }
      setFriends(friends.list);
      setFriendsCount(user.friendsCount);
    }
  };

  const updateUserTasks = async () => {
    const response = await getUserTasks();
    if (response.list) setTasks(response.list);
    return response.list;
  };

  const handleTap = () => {
    if (energy >= earnPerTap) {
      setTaps((prevTaps) => prevTaps + 1);
      setBalance((prevBalance) => prevBalance + earnPerTap);
      setEnergy((prevEnergy) => prevEnergy - earnPerTap);
      setMoodProgress(100);
      setLastTap(Date.now());
      // @todo: Обновить User после после покупки карточки, иначе выводит старый PPH
      // setProfitPerHour(user.profitPerHour);
    }
  };

  const buyCard = async (card: UserCard) => {
    const cardsData = await postCard(card.id);
    console.debug(cardsData);
    if (cardsData) {
      setUserCards(cardsData);
      setBalance((prevBalance) => prevBalance - card.nextLevelPrice);
      setProfitPerHour((prevProfitPerHour) => prevProfitPerHour + card.nextLevelProfitPerHour - card.profitPerHour);

      notificationEmit({
        title: t('toast.buyCard.title'),
        subtitle: t('toast.buyCard.subtitle'),
      });
    }
  };

  const feedFrog = async (dish: Dish) => {
    const dishData = await postFeeding(dish.id);
    console.debug(dishData);
    if (dishData) {
      setDishes(dishData);
      setBalance((prevBalance) => prevBalance + dish.bonus);

      notificationEmit({
        title: t('toast.feedFrog.title'),
        subtitle: t('toast.feedFrog.subtitle'),
      });
    }
    setFeedTime(Date.now());
    setCalories(dish.calories);
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
  };

  return (
    <FrogsContext.Provider
      value={{
        loading,
        config,
        user,
        balance,
        taps,
        energy,
        maxEnergy,
        earnPerTap,
        profitPerHour,
        level,
        dishes,
        userCards,
        maxLevel,
        progress,
        moodProgress,
        satietyProgress,
        nextLevelPrice,
        lastFriendsUpdate,
        friends,
        friendsCount,
        tasks,
        event,
        setEvent,
        updateBalance,
        clearEvent,
        updateNetwork,
        updateFriendsList,
        updateUserTasks,
        handleTap,
        buyCard,
        feedFrog,
        updateCards,
        upgradeLevel,
      }}
    >
      {children}
    </FrogsContext.Provider>
  );
};
