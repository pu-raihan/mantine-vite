import { Button, createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Georgia, sans-serif',
  fontSizes:{md:"10"},
  headings:{
    fontFamily: 'Roboto, sans-serif',
  },
  colors:{

  },
   components: {
    Button: Button.extend({
      defaultProps: {
        color: 'cyan',
        variant: 'dark',
      },
    }),
  },
});
