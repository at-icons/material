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
    <path d="M6,2H14L20,8V20C20,21.1 19.1,22 18,22H6C4.9,22 4,21.1 4,20V4C4,2.9 4.9,2 6,2M13,3.5V9H18.5L13,3.5M7,13L8.5,20H10.5L12,17L13.5,20H15.5L17,13H18V11H14V13H15L14.1,17.2L13,15V15H11V15L9.9,17.2L9,13H10V11H6V13H7Z" />
  </svg>
)
