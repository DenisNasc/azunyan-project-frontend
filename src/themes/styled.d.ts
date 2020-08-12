import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    defaultSpacing: string;
    colors: {
      purple: string;
      lightBlue: string;
      red: string;
      black: string;
    };
  }
}
