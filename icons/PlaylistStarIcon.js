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
    <path d="M17,19.09L19.45,20.58L18.8,17.77L21,15.89L18.11,15.64L17,13L15.87,15.64L13,15.89L15.18,17.77L14.5,20.58L17,19.09M4,14H12V16H4V14M4,6H16V8H4V6M4,10H16V12H4V10Z" />
  </svg>
)
