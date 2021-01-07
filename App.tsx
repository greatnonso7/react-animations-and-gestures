import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

import { LoadAssets, StyleGuide, cards } from './src/components';
import Examples, { examples } from "./src/Examples";
import ClockValuesAndIdentities from './src/ClockValuesAndIdentities';

enableScreens();

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

const assets = [
  ...examples.map((example) => example.source),
  ...cards.map((card) => card.source),
  ...profiles.map((profile) => profile.profile),
  ...pictures,
];