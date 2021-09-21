import { createTheme } from "@material-ui/core";

const mainColor = '#000';
const white = '#fff';

declare module '@material-ui/core/styles/createPalette' {
  type Olympic = {
    mainColor: string;
    white: string;
  };
  interface Palette{
    olympic: Olympic;
  }
  interface PaletteOptions {
    olympic: Olympic;
  }
}

export const themeDefault = createTheme({
  palette:{
    olympic:{
      mainColor,
      white,
    }
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
  },
  direction: 'ltr',
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 48,
      },
      '@media (min-width:600px)': { minHeight: 64 },
    },
  },
  overrides: {},
});