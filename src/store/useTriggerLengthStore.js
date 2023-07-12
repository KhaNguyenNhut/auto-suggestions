import { create } from 'zustand';

export const useTriggerLengthStore = create((set) => ({
  triggerLength: 1,
  onChangeTriggerLength: (value) =>
    set(() => ({ triggerLength: value > 0 ? value : 1 })),
}));
