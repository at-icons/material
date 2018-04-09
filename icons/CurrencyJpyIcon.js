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
    <path d="M11,21V16H6V14H11V13.71L10.16,12H6V10H9.19L5.77,3H8L12,11.2L16,3H18.23L14.81,10H18V12H13.84L13,13.71V14H18V16H13V21H11Z" />
  </svg>
)
