import { create } from 'zustand';
import { DEFAULT_BLOCK_SETTINGS } from '../constant';

export const useBlockSettingStore = create((set) => ({
  blockSettings: DEFAULT_BLOCK_SETTINGS,
  updateBlocksSetting: (setting, value) =>
    set((state) => {
      const newSettings = { ...state.blockSettings };
      newSettings[setting].show = value;
      return { blockSettings: newSettings };
    }),
}));
