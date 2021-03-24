/* eslint-disable react/prop-types */
import { ThemeSettingProvider } from '../context/theme';
import { SoundSettingProvider } from '../context/sound';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SoundSettingProvider>
      <ThemeSettingProvider>
        <Component {...pageProps} />
      </ThemeSettingProvider>
    </SoundSettingProvider>
  );
}

export default MyApp;
