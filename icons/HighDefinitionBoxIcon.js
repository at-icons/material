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
    <path d="M19,3H5C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M11,15H9.5V13H7.5V15H6V9H7.5V11.5H9.5V9H11V15M13,9H17C17.55,9 18,9.45 18,10V14C18,14.55 17.55,15 17,15H13V9M14.5,13.5H16.5V10.5H14.5V13.5Z" />
  </svg>
)
