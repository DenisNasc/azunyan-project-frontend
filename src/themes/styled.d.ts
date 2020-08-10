import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    defaultSpacing: string;
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
