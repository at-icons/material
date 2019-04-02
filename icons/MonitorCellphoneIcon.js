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
    <path d="M23,11H18C17.45,11 17,11.45 17,12V21C17,21.55 17.45,22 18,22H23C23.55,22 24,21.55 24,21V12C24,11.45 23.55,11 23,11M23,20H18V13H23V20M20,2H2C0.89,2 0,2.89 0,4V16C0,17.1 0.9,18 2,18H9V20H7V22H15V20H13V18H15V16H2V4H20V9H22V4C22,2.89 21.1,2 20,2Z" />
  </svg>
)
