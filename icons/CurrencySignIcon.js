import React from 'react'

const DEFAULT_SIZE = 24

export const CurrencySignIcon = ({
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
    <path d="M22,12C22,9.86 21.29,7.78 20,6.07L22,4.07L19.94,1.94L17.94,3.94C14.4,1.36 9.59,1.38 6.07,4L4.07,2L1.94,4.06L3.94,6.06C1.36,9.6 1.38,14.41 4,17.93L2,19.93L4.12,22.05L6.12,20.05C9.65,22.65 14.45,22.65 18,20.05L20,22.05L22.1,19.93L20.1,17.93C21.35,16.21 22,14.13 22,12M12,19C8.13,19 5,15.87 5,12C5,8.13 8.13,5 12,5C15.87,5 19,8.13 19,12C19,15.87 15.87,19 12,19Z" />
  </svg>
)
