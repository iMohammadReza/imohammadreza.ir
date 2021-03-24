import {
  createContext, useContext, useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import useSoundLib from 'use-sound';

import booleanStorage from '../services/booleanStorage';

const SoundSettingContext = createContext();
const localStorageKey = 'SOUND_SETTING_IS_ON';

const initialValue = booleanStorage.getItem(localStorageKey, { defaultValue: true });

export const useSoundSetting = () => useContext(SoundSettingContext);

export function useSound(sound, configs) {
  const { value } = useSoundSetting();

  const [playSound, options] = useSoundLib(sound, configs);

  return [value || configs.forsePlay ? playSound : () => {}, options];
}

export function SoundSettingProvider({ children }) {
  const [value, setSeound] = useState(initialValue);

  const toggleSound = useCallback(() => {
    const newValue = !value;
    setSeound(newValue);
    booleanStorage.setItem(localStorageKey, newValue);
  }, [value]);

  const contextValue = {
    value,
    toggleSound,
  };

  return (
    <SoundSettingContext.Provider value={contextValue}>
      {children}
    </SoundSettingContext.Provider>
  );
}

SoundSettingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
