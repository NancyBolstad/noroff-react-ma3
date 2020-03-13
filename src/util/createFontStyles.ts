import { css } from 'styled-components';
import { Font } from '../types/theme';

function createFontStyles(font: Font) {
  return css`
    font-family: ${font.family};
    font-weight: ${font.weight};
    font-size: ${font.size}rem;
    ${font.lineHeight &&
      css`
        line-height: ${font.lineHeight};
      `};
  `;
}

export default createFontStyles;
