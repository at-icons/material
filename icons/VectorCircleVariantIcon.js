import React from 'react'

const DEFAULT_SIZE = 24

export default ({
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
    <path d="M22,9H19.97C18.7,5.41 15.31,3 11.5,3C6.53,3 2.5,7.03 2.5,12C2.5,17 6.53,21 11.5,21C15.31,21 18.7,18.6 20,15H22M20,11V13H18V11M17.82,15C16.66,17.44 14.2,19 11.5,19C7.64,19 4.5,15.87 4.5,12C4.5,8.14 7.64,5 11.5,5C14.2,5 16.66,6.57 17.81,9H16V15" />
  </svg>
)
