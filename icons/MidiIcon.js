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
    <path d="M10,7H12V15H10V7M13,7H19C19.55,7 20,7.45 20,8V14C20,14.55 19.55,15 19,15H13V10H15V13H18V9H13V7M21,7H23V15H21V7M1,7H3L8,7C8.55,7 9,7.45 9,8V15H7V9H6V15H4V9H3V15H1V7M1,16H23V19H1V16Z" />
  </svg>
)
