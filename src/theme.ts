import { Button, createTheme, mergeMantineTheme, DEFAULT_THEME } from '@mantine/core';

export const themeOverride = createTheme({
  fontFamily: 'Poppins, sans-serif',
  headings: {
    fontFamily: 'Roboto, sans-serif',
  },
  colors: {},
  components: {
    Button: Button.extend({
      defaultProps: {
        // color: 'cyan',
        // variant: 'light',
      },
    }),
  },
});
export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
