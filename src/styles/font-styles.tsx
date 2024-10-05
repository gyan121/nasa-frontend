import isUndefined from "lodash/fp/isUndefined";

export const getFontParams = (
  fontSize?: number,
  fontWeight?: number,
  lineHeight?: number,
  fontStyle?: string
) => `
    ${isUndefined(fontSize) ? "" : `font-size: ${fontSize / 16}rem;`}
    ${isUndefined(fontWeight) ? "" : `font-weight: ${fontWeight};`}
    ${isUndefined(lineHeight) ? "" : `line-height: ${lineHeight / 16}rem;`}
    ${isUndefined(fontStyle) ? "" : `font-style: ${fontStyle};`}
  `;

export const getRemUnit = (size: number) => `${size / 16}rem`;
