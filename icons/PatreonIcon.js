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
    <path d="M14.73,3C18.45,3 21.47,6.03 21.47,9.76C21.47,13.47 18.45,16.5 14.73,16.5C11,16.5 7.97,13.47 7.97,9.76C7.97,6.03 11,3 14.73,3M2.7,21V3H6V21H2.7Z" />
  </svg>
)
