import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'My UI Library',
    brandUrl: 'https://contractflow.digital',
    brandImage: './../src/assets/logos/contract-flow.png', 
  }),
});
