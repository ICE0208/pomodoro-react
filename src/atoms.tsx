import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export const DEFAULT_TIME = 60 * 25;
// 60 * 25;

const { persistAtom } = recoilPersist();

export const timeState = atom<number>({
  key: 'remainTime',
  default: DEFAULT_TIME,
});

export const minuteState = selector({
  key: 'remainHourTime', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const time = get(timeState);
    return time < 0 ? 0 : Math.floor(time / 60);
  },
});

export const secondState = selector({
  key: 'remainMinuteTime', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const time = get(timeState);
    return time < 0 ? 0 : time % 60;
  },
});

// ----

export const countState = atom<number>({
  key: 'count',
  default: 0,
  effects: [persistAtom],
});

export const roundState = selector({
  key: 'countOfRound',
  get: ({ get }) => {
    const count = get(countState);
    return count % 4;
  },
});

export const goalState = selector({
  key: 'countOfGoal',
  get: ({ get }) => {
    const count = get(countState);
    return Math.floor(count / 4);
  },
});
