import React from 'react'

const DEFAULT_SIZE = 24

export const ThumbsUpDownIcon = ({
  fill = 'currentColor',
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  style = {},
  ...props
}) => (
  <svg
    viewBox={ `0 0 ${ DEFAULT_SIZE } ${ DEFAULT_SIZE }` }
    style={{ fill, width, height, ...style }}
    { ...props }
  >
    <path d="M22.5,10.5H15.75C15.13,10.5 14.6,10.88 14.37,11.41L12.11,16.7C12.04,16.87 12,17.06 12,17.25V18.5C12,19.05 12.45,19.5 13,19.5H18.18L17.5,22.68V22.92C17.5,23.23 17.63,23.5 17.83,23.72L18.62,24.5L23.56,19.56C23.83,19.29 24,18.91 24,18.5V12C24,11.17 23.33,10.5 22.5,10.5M12,6.5C12,5.95 11.55,5.5 11,5.5H5.82L6.5,2.32V2.09C6.5,1.78 6.37,1.5 6.17,1.29L5.38,0.5L0.44,5.44C0.17,5.71 0,6.09 0,6.5V13C0,13.83 0.67,14.5 1.5,14.5H8.25C8.87,14.5 9.4,14.12 9.63,13.59L11.89,8.3C11.96,8.13 12,7.94 12,7.75V6.5Z" />
  </svg>
)
