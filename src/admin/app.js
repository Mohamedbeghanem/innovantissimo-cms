import AuthLogo from './extensions/logo-dark.png';
import MenuLogo from './extensions/logo-dark.png';
import favicon from './extensions/favicon.png';

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: MenuLogo,
    },
    head: {
      favicon: favicon,
    },
    theme: {
      light: {
        colors: {
          background: '#000000', // Main background black
          primary100: '#ffffff', // White buttons
          primary200: '#f5f5f5',
          primary500: '#ffffff',
          primary600: '#e5e5e5',
          primary700: '#ffffff',
          buttonPrimary500: '#ffffff',
          buttonPrimary600: '#f5f5f5',
          neutral0: '#000000', // Base surface black
          neutral100: '#0a0a0a',
          neutral200: '#141414',
          neutral800: '#f0f0f0',
          neutral900: '#ffffff',
          danger700: '#ff4d4f',
        },
      },
      dark: {
        colors: {
          background: '#000000',
          primary100: '#ffffff',
          primary200: '#f5f5f5',
          primary500: '#ffffff',
          primary600: '#e5e5e5',
          buttonPrimary500: '#ffffff',
          buttonPrimary600: '#f5f5f5',
          neutral0: '#000000',
          neutral100: '#0a0a0a',
          neutral200: '#141414',
          neutral800: '#f0f0f0',
          neutral900: '#ffffff',
        },
      },
    },
  },
  bootstrap() {},
};
