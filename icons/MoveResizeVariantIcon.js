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
    <path d="M1.88,0.46L0.46,1.88L5.59,7H2V9H9V2H7V5.59M11,7V9H21V15H23V9C23,7.9 22.1,7 21,7M7,11V21C7,22.1 7.9,23 9,23H15V21H9V11M15.88,14.46L14.46,15.88L19.6,21H17V23H23V17H21V19.59" />
  </svg>
)
