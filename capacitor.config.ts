import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.grimoire.artefice',
  appName: 'Grimoire',
  webDir: 'www',
  android: {
    allowMixedContent: true,
    backgroundColor: '#111111',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
  server: {
    // Permette al localStorage di funzionare correttamente su Android
    androidScheme: 'https',
  },
};

export default config;
