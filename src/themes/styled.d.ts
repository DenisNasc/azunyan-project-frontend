import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    defaultMargin: string;
    colors: {
      main: string;
      secondary: string;
    };
    form: {
      colors: {
        input: string;
        button: string;
      };
    };
  }
}
