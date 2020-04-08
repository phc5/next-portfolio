import 'styled-components';
/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-images" />

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string;
    text: string;
  }
}

declare module '**/*.md' {
  const value: any;
  export default value;
}
