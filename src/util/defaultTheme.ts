import {
  Theme,
  IColors,
  Font,
  IFontFamily,
  IFontWeight,
  IFonts,
  IMediaQueries,
  ISpacing,
} from '../types/theme';

const defaultColors: IColors = {
  primary: '#ffffff',
  primaryVariant: '#F8F8F9',
  secondary: '#ef3b7d',
  secondaryVariant: '#ec5990',
  background: '#191d3a',
  surface: '#516391',
  error: '#D6170C',
  onPrimary: '#000000',
  onSecondary: '#000000',
  onBackground: '#ffffff',
  onSurface: '#ffffff',
  onError: '#ffffff',
};

export const defaultMediaQueries: IMediaQueries = {
  small: 600,
  medium: 768,
  large: 1280,
};

const defaultSpacing: ISpacing = {
  xs: 0.5,
  s: 1,
  m: 1.5,
  l: 3,
  xl: 5,
};

const defaultFontFamily: IFontFamily = {
  primary: "'Roboto', sans-serif",
  secondary: "'Anton', sans-serif",
};

const defaultFontWeight: IFontWeight = {
  regular: 400,
  semiBold: 600,
  bold: 700,
};

const h1: Font = {
  family: defaultFontFamily.secondary,
  weight: defaultFontWeight.bold,
  size: 2.875,
  lineHeight: 1.25,
};

const h2: Font = {
  family: defaultFontFamily.secondary,
  weight: defaultFontWeight.bold,
  size: 2.5625,
  lineHeight: 1.15,
};

const h3: Font = {
  family: defaultFontFamily.primary,
  weight: defaultFontWeight.bold,
  size: 2.25,
  lineHeight: 1.15,
};

const h4: Font = {
  family: defaultFontFamily.primary,
  weight: defaultFontWeight.bold,
  size: 2.125,
  lineHeight: 1.15,
};

const h5: Font = {
  family: defaultFontFamily.primary,
  weight: defaultFontWeight.regular,
  size: 1.375,
  lineHeight: 1.15,
};

const h6: Font = {
  family: defaultFontFamily.primary,
  weight: defaultFontWeight.bold,
  size: 1,
  lineHeight: 1.15,
};

const b1: Font = {
  family: defaultFontFamily.primary,
  weight: defaultFontWeight.regular,
  size: 1,
  lineHeight: 1.5,
};

const b2: Font = {
  family: defaultFontFamily.primary,
  weight: defaultFontWeight.bold,
  size: 1.125,
  lineHeight: 1.15,
};

const b3: Font = {
  family: defaultFontFamily.primary,
  weight: defaultFontWeight.bold,
  size: 1.125,
  lineHeight: 1.15,
};

export const defaultFonts: IFonts = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  b1,
  b2,
  b3,
};

export const defaultTheme: Theme = {
  spacing: defaultSpacing,
  fonts: defaultFonts,
  mediaQueries: defaultMediaQueries,
  colors: defaultColors,
};

export default defaultTheme;
