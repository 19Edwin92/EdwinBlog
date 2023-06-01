import { ThemedStyledProps, CSSObject } from 'styled-components';

// ThemedGlobalStyledClassProps 정의
export type ThemedGlobalStyledClassProps<P, T> = {
  as?: React.ElementType;
  forwardedAs?: React.ElementType;
  css?: CSSObject | CSSObject[];
} & ThemedStyledProps<P, T>;

// GlobalStyledProps 정의
export type GlobalStyledProps = {
  info: boolean;
};