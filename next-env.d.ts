import {} from 'styled-components';
import { CSSProp } from 'styled-components';
/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-images" />

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}

declare module '**/*.md' {
  const value: any;
  export default value;
}
